import { expect } from "chai";
import { describe, it } from "mocha";
import { lexDocument } from "../../../lexer/lexer.js";
import { parser } from "../../test_parser.js";

function parse(inputText) {
  parser.reset();
  const lexResult = lexDocument(inputText);
  parser.input = lexResult.tokens;
  parser.dbQueryFn();
  return parser;
}

describe("dbQueryFn", () => {
  it("dbQueryFn accepts a field_name and field_value", () => {
    const parser = parse(`query user {
      where = $db.array_columns @> $db.array_columns.id
    } as $user`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn accepts a string literal for table", () => {
    const parser = parse(`query "my users" {
      where = $db.array_columns @> $db.array_columns.id
    } as $user`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn can be disabled", () => {
    const parser = parse(`query user {
      where = $db.array_columns @> $db.array_columns.id
      disabled = true
    } as $user`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn accepts a description", () => {
    const parser = parse(`query user {
      where = $db.array_columns @> $db.array_columns.id
      description = "query to get user by email"
    } as $user`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn accepts an addon", () => {
    const parser = parse(`query user {
      where = $db.array_columns @> $db.array_columns.id
      addon = {
        client: {
          name : "client"
          input: {client_id: ""}
        }
      }
    } as $user`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn accepts SQL filters", () => {
    const parser = parse(`query locations {
      where = $db.location.geometry|covers:$input.target_geometry
    } as $is_in_location`);

    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn allows SQL filters to be disabled", () => {
    const parser = parse(`query locations {
      where = $db.location.geometry|!covers:$input.target_geometry|covers:$input.target_geometry
    } as $is_in_location`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn accepts search expression", () => {
    const parser = parse(`query user {
      where = $db.clients.name == $db.invoices.total_amount || $db.invoices @> $db.clients.name && ($db.invoices.items != $db.clients.name || $db.invoices.client_id > $db.invoices.id || $db.clients.is_active not in $db.invoices.id || $db.invoices.id in $db.invoices.id || $env.$request_method contains "something" || $db.clients.name includes $db.clients.id || ($db.invoices.total_amount|add:55) not contains $db.clients.name && $db.invoices.items overlaps $db.invoices.id || $db.invoices.items not overlaps $db.invoices.items)
    } as $user`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn accepts sub addon", () => {
    const parser = parse(`query user {
      where = $db.array_columns @> $db.array_columns.id
      addon = {
        _client: {
          name  : "client"
          output: ["id", "name"]
          input : {client_id: ""}
          addon : {
            _client: {
              name  : "client"
              input : { client_id: $output.id }
            }
          }
        }
      }
    } as $user`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn accepts ? for ignore if null", () => {
    const parser = parse(`query user {
      where = $db.clients.name ==? $db.invoices.total_amount || $db.invoices @>? $db.clients.name && ($db.invoices.items !=? $db.clients.name || $db.invoices.client_id > $db.invoices.id || $db.clients.is_active not in? $db.invoices.id || $db.invoices.id in? $db.invoices.id || $env.$request_method contains "something" || $db.clients.name includes $db.clients.id || ($db.invoices.total_amount|add:55) not contains? $db.clients.name && $db.invoices.items overlaps? $db.invoices.id || $db.invoices.items not overlaps? $db.invoices.items)
    } as $user`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn accepts an output as an array of strings", () => {
    const parser = parse(`query user {
      where = $db.array_columns @> $db.array_columns.id
      output = [
        "itemsReceived"
        "curPage"
        "prevPage"
        "perPage"
        "items.id"
        "items.created_at"
        "items.many_text"
        "items.many_enum_required_private"
      ]
    } as $user`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn accepts a return list", () => {
    const parser = parse(`query user {
      return = {
        type: "list"
        paging : {
          page    : 1
          per_page: 25
          totals  : false
          offset  : 0
          metadata: true
        }
      }
      sort = {
        "array_columns.id": "asc"
        "array_columns.name": "rand"
      }
    } as $user`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn return list cannot reference a variable", () => {
    const parser = parse(`query user {
      return = {
        type: "list"
        paging : {
          page    : $input.page
          per_page: 25
          totals  : false
          offset  : 0
          metadata: true
        }
        sort = {"array_columns.id": "asc"}
      }
    } as $user`);

    expect(parser.errors).to.not.be.empty;
  });

  it("dbQueryFn accepts a return stream", () => {
    const parser = parse(`query user {
      return = {
        type    : "stream"
        distinct: "yes"
        paging  : {page: 1, per_page: 25}
      }
      sort = {"books.title" : "asc"}
    } as $user`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn accepts a return exists", () => {
    const parser = parse(`query user {
      return = {
        type : "exists"
      }
    } as $user`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn accepts a return count", () => {
    const parser = parse(`query user {
      return = {
        type: "count"
      }
    } as $user`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn accepts a return aggregate", () => {
    const parser = parse(`query user {
      sort = { 
        "book_club_meeting_book_id": "asc"
      }
      return  = {
        type   : "aggregate"
        paging: {page: $input.page, per_page: 25}
        group : {comment_content1: $db.comment.content}
        eval  : {count_name: $db.name|count}
      }
    } as $user`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn parses an eval as a search expression", () => {
    const parser = parse(`query document {
      where = ($db.document.title_embeddings|negative_inner_product:$embedding.embedding) < -0.5
      sort = {similarity_score: "asc"}
      eval = {
        similarity_score: $db.document.title_embeddings|negative_inner_product:$embedding.embedding
      }
    
      return = {type: "list"}
      output = ["id", "created_at", "title", "content", "similarity_score"]
    } as $document1`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn accepts a return single", () => {
    const parser = parse(`query user {
      return = {
        type: "single"
      }
      sort = {"book_club_meeting.id": "asc"}
    } as $user`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn accepts a join", () => {
    const parser = parse(`query user {
      where = $db.array_columns @> $db.array_columns.id
      join = {
        availability: {
          table : "availability"
          type  : "left"
          where: $db.array_columns @> "foo"
        }
      }
    } as $user`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn complex query", () => {
    const parser = parse(`query user {
      where = $db.array_columns @> $db.array_columns.id
      join = {
        availability: {
          table : "availability"
          type  : "left"
          where: $db.array_columns @> "foo"
        }
      }
      return = {
        type: "list", 
        paging: {
          page: $input.page,
          per_page: 25
        }
      }
      additional_where = $input.query  
      output = [
        "itemsReceived"
        "curPage"
        "prevPage"
        "perPage"
        "items.id"
        "items.created_at"
        "items.many_text"
        "items.many_enum_required_private"
      ]
    
      addon = {_post: {name: "post", input: {post_id: "post"}}}
    } as $array_columns1`);
    expect(parser.errors).to.be.empty;
  });

  it("dbQueryFn does not require a search attribute", () => {
    const parser = parse(`query user as $user`);
    expect(parser.errors).to.be.empty;
  });
});
