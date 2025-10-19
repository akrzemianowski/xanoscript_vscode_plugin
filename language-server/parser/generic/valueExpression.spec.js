import { expect } from "chai";
import { describe, it } from "mocha";
import { lexDocument } from "../../lexer/lexer.js";
import { parser } from "../test_parser.js";

function parse(inputText) {
  const lexResult = lexDocument(inputText);
  parser.input = lexResult.tokens;
  parser.valueExpression();
  return parser;
}

function parseOptional(inputText) {
  parser.reset();
  const lexResult = lexDocument(inputText);
  parser.input = lexResult.tokens;
  parser.valueExpression({ allowOptionalIfNull: true });
  return parser;
}

function parseQuery(inputText) {
  parser.reset();
  const lexResult = lexDocument(inputText);
  parser.input = lexResult.tokens;
  parser.valueExpression({ allowQueryExpression: true });
  return parser;
}

describe("valueExpression", () => {
  it("valueExpression can be a boolean", () => {
    const parser = parse("true");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be a string literal", () => {
    const parser = parse('"some string"');
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be a float literal", () => {
    const parser = parse("42.54");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be a negative float literal", () => {
    const parser = parse("-42.54");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be the attribute of a filtered value", () => {
    let parser = parse("($var.value|first).record.enabled");
    expect(parser.errors).to.be.empty;

    parser = parse("(test == bar).record.enabled");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be multiline when using filters", () => {
    let parser = parse(`$var.value|last
      |to_upper
      |first
      |to_lower
      |trim`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression query rejects malformed expressions", () => {
    let parser = parseQuery(`($db.user.age|between:18)65`);
    expect(parser.errors).to.not.be.empty;

    // this is invalid because the first part should be in parenthesis
    parser = parseQuery(`$db.user.collection|first == test`);
    expect(parser.errors).to.not.be.empty;
  });

  it("valueExpression query rejects ternary expressions", () => {
    let parser = parseQuery(`($db.user.age ? true : false)`);
    expect(parser.errors).to.not.be.empty;
  });

  it("regular valueExpression accepts ternary expressions", () => {
    let parser = parse(`$db.user.age > 18 ? "yes" : "no"`);
    expect(parser.errors).to.be.empty;

    parser = parse(`$input.position > -1 ? $input.position : ($text|count)`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression query can be a query expression", () => {
    let parser = parseQuery(`$db.user.age|between:18:65`);
    expect(parser.errors).to.be.empty;

    parser = parseQuery(`$db.array_columns @> $db.array_columns.id`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression query as a query expression only allows query filters", () => {
    const parser = parseQuery(`$db.name|regex_replace:"foo":"bar"`);
    expect(parser.errors).to.not.be.empty;
  });

  it("valueExpression can be a constructed object", () => {
    const parser = parse(`{}|set:"foo":"bar"`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be a constructed object", () => {
    const parser = parse(`{}|set:foo:bar`);
    expect(parser.errors).to.be.empty;
  });

  it("values can be in parenthesis with a filter", () => {
    const parser = parse(`($daily_sales[$$].amount)|sum`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be an integer literal", () => {
    const parser = parse("42");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be a multi line string ", () => {
    const parser = parse(`"""
        {% set user = {
            'isActive': true,
            'isPending': false
        } %}
        
        {% if user.isActive %}
            Active user
        {% elseif user.isPending %}
            Pending activation
        {% else %}
            Inactive user
        {% endif %}
        """`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be a negative integer literal", () => {
    const parser = parse("-42");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be 'now'", () => {
    const parser = parse("now");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be an array", () => {
    const parser = parse(`[1,2, "test" ,3]`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be an array index", () => {
    const parser = parse(`$value[12]`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression array index can be a variable", () => {
    let parser = parse(`$value[$index]`);
    expect(parser.errors).to.be.empty;

    parser = parse(`$value[$var.index]`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be a multiline string", () => {
    const parser = parse(`"""
    This is a multiline string.
    """`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be an object", () => {
    const parser = parse(`{ "key": "value" }`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be a float literal", () => {
    const parser = parse("42.54");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be a system variable", () => {
    const parser = parse("$env.$remote_ip");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression cannot extend system variable", () => {
    const parser = parse("$env.$remote_ip.foo");
    expect(parser.errors).to.not.be.empty;
  });

  it("valueExpression cannot extend env variable", () => {
    const parser = parse("$env.my_env.foo");
    expect(parser.errors).to.not.be.empty;
  });

  it("valueExpression can be a short named variable", () => {
    const parser = parse("$users");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression allow concat operator", () => {
    const parser = parse(
      `"Given the conversation history and the latest message:\\n\\"" ~ $latestMessage ~ "\\"\\n\\nWho should act next? Or should we FINISH? Select one of: " ~ ($memberOptions|join:", ") ~ "."`
    );
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can use a request keyword as an attribute", () => {
    let parser = parse(`$input.body.foo`);
    expect(parser.errors).to.be.empty;

    parser = parse(`$input.request.foo`);
    expect(parser.errors).to.be.empty;

    parser = parse(`$input.api.foo`);
    expect(parser.errors).to.be.empty;

    parser = parse(`$input.request.lambda`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be null", () => {
    const parser = parse("null");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be a variable", () => {
    const parser = parse("$var.users");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be an expression", () => {
    const parser = parse("[1,2,3]|first");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be a value + filter", () => {
    const parser = parse(`12212|add:$index`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accepts casted value", () => {
    const parser = parse(`!bool "true"`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accepts chained filters with args", () => {
    const parser = parse(`!array "[]"|push:1|push:"value"`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression should accept chained filters in parenthesis", () => {
    const parser = parse(
      `(now|to_timestamp|transform_timestamp:"24 hours ago":"UTC")`
    );
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression should accept chained filters with comparison", () => {
    const parser = parse(
      `(now|to_timestamp|transform_timestamp:"24 hours ago":"UTC") > (335|add:2)`
    );
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accepts chained filters with variables as args", () => {
    const parser = parse(`!array "[]"|push:$input.body|push:$env.my_api_key`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accepts a single filter", () => {
    const parser = parse(`!array "[]"|first`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accepts a strict not equal comparison", () => {
    const parser = parse(`"foo" !== "bar"`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accepts a strict equal comparison", () => {
    const parser = parse(`"foo" === "bar"`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accepts a equal comparison", () => {
    const parser = parse(`"foo" == "bar"`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accepts a not equal comparison", () => {
    const parser = parse(`"foo" != "bar"`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accepts combined expression using OR", () => {
    const parser = parse(`(!array "[]"|first) || ($input.body|is_array)`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accepts combined expression using AND", () => {
    const parser = parse(`(!array "[]"|first) && ($input.body|is_array)`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accepts an multiline object separated by commas", () => {
    const parser = parse(`{
      "ensign": 1,
      "lieutenant junior grade": 2,
      "lieutenant": 3
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accepts an multiline object separated by new lines", () => {
    const parser = parse(`{
      "ensign": 1
      "lieutenant junior grade": 2
      "lieutenant": 3
    }`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accepts comparative expression", () => {
    const parser = parse(`($input.data|count) > 0`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be a shorthand var starting with var", () => {
    const parser = parse("$variable");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression rejects consecutive values without an operand", () => {
    const parser = parse("$variable 12");
    expect(parser.errors).to.not.be.empty;
  });

  it("valueExpression can be an env variable", () => {
    const parser = parse("$env.my_api_key");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be a system variable", () => {
    const parser = parse("$env.$remote_ip");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be an input variable", () => {
    const parser = parse("$input.body");
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression compares a variable and constant", () => {
    const parser = parse(`$input.a > 10`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be a multiline expression", () => {
    const parser = parse(`\`\`\`
        {
          "test": {
            "value": 1
          }
        }
        \`\`\`|get:"test":null`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can be a single line expression", () => {
    const parser = parse(`\`{"test": {"value": 1}}\`|get:"test":null`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can compare two constant", () => {
    const parser = parse(`12 == 12`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can optionally compare two values", () => {
    const parser = parseOptional(`$var.x ==? $input.x`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression shouldn't be able to use ? everywhere", () => {
    let parser = parseOptional(`$var.x == $input.x &&? $var.y != $input.y`);
    expect(parser.errors).to.not.be.empty;

    parser = parseOptional(`$var.x =? $input.x`);
    expect(parser.errors).to.not.be.empty;
  });

  it("valueExpression can compare a constant and a variable", () => {
    const parser = parse(`12 <= $input.a12`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accept parenthesis", () => {
    const parser = parse(`($input.a) < (35)`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accept parenthesis and filter", () => {
    const parser = parse(`($input.a|abs) < (35|add:2)`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can do ternary with filters", () => {
    const parser = parse(`($input.a|abs) ? "true": "false"`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression ternary can be chained", () => {
    const parser = parse(`($input.a|abs) ? true ? false : "true" : "false"`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression can do ternary without an expression", () => {
    const parser = parse(`true ? (1+2+4) : (5 + 2)`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accept parenthesis for priority for math", () => {
    const parser = parse(`((1+2+4) * (5 - 2) + 2) / 2`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accept math with variable", () => {
    const parser = parse(`2 * $input.a + 2 / $input.b - 2`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression accept math with variable with parentheses", () => {
    const parser = parse(`2 * ($input.a + 2 / $input.b)- 2`);
    expect(parser.errors).to.be.empty;
  });

  it("valueExpression breaks on missing parenthese", () => {
    const parser = parse(`($input.a|abs < (35|add:2)`);
    expect(parser.errors).to.not.be.empty;
  });

  it("valueExpression requires parenthesis when filter are present", () => {
    let parser = parse(`$input.a|abs < (35|add:2)`);
    expect(parser.errors).to.not.be.empty;

    parser = parse(`$input.a|abs > 35|add:2`);
    expect(parser.errors).to.not.be.empty;
  });

  it("valueExpression accepts a filter if after an operator", () => {
    const parser = parse(`($input.a|abs) != 35|add:2`);
    expect(parser.errors).to.be.empty;
  });
});
