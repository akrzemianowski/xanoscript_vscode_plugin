"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const extractInputSchema_1 = require("./extractInputSchema");
suite("extractInputSchema", () => {
    test("should extract simple input schema with one field", () => {
        const tableContent = `query test verb=GET {
  input {
    int user_id?
  }
}`;
        const result = (0, extractInputSchema_1.extractInputSchema)(tableContent);
        assert.deepStrictEqual(result, {
            user_id: {
                type: "int",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
        });
    });
    test("should extract multiple input fields", () => {
        const tableContent = `query test verb=POST {
  input {
    text name?
    email email_address?
    int age?
    bool is_active?
  }
}`;
        const result = (0, extractInputSchema_1.extractInputSchema)(tableContent);
        assert.deepStrictEqual(result, {
            name: {
                type: "text",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            email_address: {
                type: "email",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            age: {
                type: "int",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            is_active: {
                type: "bool",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
        });
    });
    test("should handle nested objects in input schema", () => {
        const tableContent = `query test verb=POST {
  input {
    int user_id?
    dblink {
      table = "users"
    }
    text description?
  }
}`;
        const result = (0, extractInputSchema_1.extractInputSchema)(tableContent);
        assert.deepStrictEqual(result, {
            user_id: {
                type: "int",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            description: {
                type: "text",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
        });
    });
    test("should return empty object when no input block exists", () => {
        const tableContent = `query test verb=GET {
  stack {
    db.query "users" {}
  }
}`;
        const result = (0, extractInputSchema_1.extractInputSchema)(tableContent);
        assert.deepStrictEqual(result, {});
    });
    test("should handle input block with various field types", () => {
        const tableContent = `query test verb=POST {
  input {
    timestamp created_at?
    uuid user_uuid?
    json metadata?
    decimal price?
    date birth_date?
    password user_password?
  }
}`;
        const result = (0, extractInputSchema_1.extractInputSchema)(tableContent);
        assert.deepStrictEqual(result, {
            created_at: {
                type: "timestamp",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            user_uuid: {
                type: "uuid",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            metadata: {
                type: "json",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            price: {
                type: "decimal",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            birth_date: {
                type: "date",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            user_password: {
                type: "password",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
        });
    });
    test("should handle geo types", () => {
        const tableContent = `query test verb=POST {
  input {
    geo_point location?
    geo_polygon area?
    geo_linestring route?
  }
}`;
        const result = (0, extractInputSchema_1.extractInputSchema)(tableContent);
        assert.deepStrictEqual(result, {
            location: {
                type: "geo_point",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            area: {
                type: "geo_polygon",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            route: {
                type: "geo_linestring",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
        });
    });
    test("should handle media types", () => {
        const tableContent = `query test verb=POST {
  input {
    image profile_pic?
    video intro_video?
    audio voice_note?
    attachment document?
  }
}`;
        const result = (0, extractInputSchema_1.extractInputSchema)(tableContent);
        assert.deepStrictEqual(result, {
            profile_pic: {
                type: "image",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            intro_video: {
                type: "video",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            voice_note: {
                type: "audio",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            document: {
                type: "attachment",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
        });
    });
    test("should handle empty input block", () => {
        const tableContent = `query test verb=GET {
  input {
  }
}`;
        const result = (0, extractInputSchema_1.extractInputSchema)(tableContent);
        assert.deepStrictEqual(result, {});
    });
    test("should handle input block with filters", () => {
        const tableContent = `query test verb=POST {
  input {
    int user_id? filters=min:1
    text name? filters=max_length:100
  }
}`;
        const result = (0, extractInputSchema_1.extractInputSchema)(tableContent);
        assert.deepStrictEqual(result, {
            user_id: {
                type: "int",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            name: {
                type: "text",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
        });
    });
    test("should handle deeply nested objects", () => {
        const tableContent = `query test verb=POST {
  input {
    text name?
    dblink {
      table = "users"
      nested {
        value = "test"
      }
    }
    int age?
  }
}`;
        const result = (0, extractInputSchema_1.extractInputSchema)(tableContent);
        assert.deepStrictEqual(result, {
            name: {
                type: "text",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            age: {
                type: "int",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
        });
    });
    test("should handle input with object and enum types", () => {
        const tableContent = `query test verb=POST {
  input {
    object user_data? {
      schema {
        int id?
        text name?
      }
    }
    enum? status
    text description?
  }
}`;
        const result = (0, extractInputSchema_1.extractInputSchema)(tableContent);
        assert.deepStrictEqual(result, {
            user_data: {
                type: "object",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            status: {
                type: "enum",
                default: undefined,
                optional: false,
                nullable: false,
                isArray: false,
            },
            description: {
                type: "text",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
        });
    });
    test("should handle required fields (without ?)", () => {
        const tableContent = `query test verb=POST {
  input {
    int user_id
    text name?
  }
}`;
        const result = (0, extractInputSchema_1.extractInputSchema)(tableContent);
        assert.deepStrictEqual(result, {
            user_id: {
                type: "int",
                default: undefined,
                optional: false,
                nullable: false,
                isArray: false,
            },
            name: {
                type: "text",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
        });
    });
    test("should handle input block with extra whitespace", () => {
        const tableContent = `query test verb=POST {
  input {
    
    int    user_id?
    
    text   name?
    
  }
}`;
        const result = (0, extractInputSchema_1.extractInputSchema)(tableContent);
        assert.deepStrictEqual(result, {
            user_id: {
                type: "int",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            name: {
                type: "text",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
        });
    });
    test("should stop at closing brace of input block", () => {
        const tableContent = `query test verb=POST {
  input {
    int user_id?
    text name?
  }
  stack {
    text should_not_appear?
  }
}`;
        const result = (0, extractInputSchema_1.extractInputSchema)(tableContent);
        assert.deepStrictEqual(result, {
            user_id: {
                type: "int",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            name: {
                type: "text",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
        });
    });
    test("should handle vector type", () => {
        const tableContent = `query test verb=POST {
  input {
    vector embedding?
    text content?
  }
}`;
        const result = (0, extractInputSchema_1.extractInputSchema)(tableContent);
        assert.deepStrictEqual(result, {
            embedding: {
                type: "vector",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
            content: {
                type: "text",
                default: undefined,
                optional: false,
                nullable: true,
                isArray: false,
            },
        });
    });
});
//# sourceMappingURL=extractInputSchema.test.js.map