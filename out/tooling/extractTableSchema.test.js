"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const extractTableSchema_1 = require("./extractTableSchema");
suite("extractTableSchema", () => {
    test("should extract simple table schema with one field", () => {
        const tableContent = `table users {
  schema {
    int id
  }
}`;
        const result = (0, extractTableSchema_1.extractTableSchema)(tableContent);
        assert.deepStrictEqual(result, {
            id: {
                type: "int",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: false,
            },
        });
    });
    test("should extract multiple table fields", () => {
        const tableContent = `table users {
  schema {
    int id
    text name?
    email email_address?
    int age?
    bool is_active?
  }
}`;
        const result = (0, extractTableSchema_1.extractTableSchema)(tableContent);
        assert.deepStrictEqual(result, {
            id: {
                type: "int",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: false,
            },
            name: {
                type: "text",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            email_address: {
                type: "email",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            age: {
                type: "int",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            is_active: {
                type: "bool",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
        });
    });
    test("should handle nested objects in table schema", () => {
        const tableContent = `table users {
  schema {
    int id
    object settings? {
      text theme?
      bool notifications?
    }
    text description?
  }
}`;
        const result = (0, extractTableSchema_1.extractTableSchema)(tableContent);
        assert.deepStrictEqual(result, {
            id: {
                type: "int",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: false,
            },
            settings: {
                type: "object",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            description: {
                type: "text",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
        });
    });
    test("should return empty object when no schema block exists", () => {
        const tableContent = `table users {
  auth = false
}`;
        const result = (0, extractTableSchema_1.extractTableSchema)(tableContent);
        assert.deepStrictEqual(result, {});
    });
    test("should handle table schema with various field types", () => {
        const tableContent = `table events {
  schema {
    int id
    timestamp created_at?=now
    uuid event_uuid?
    json metadata?
    decimal price?
    date event_date?
    password user_password?
  }
}`;
        const result = (0, extractTableSchema_1.extractTableSchema)(tableContent);
        assert.deepStrictEqual(result, {
            id: {
                type: "int",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: false,
            },
            created_at: {
                type: "timestamp",
                default: "now",
                isArray: false,
                optional: false,
                nullable: false,
            },
            event_uuid: {
                type: "uuid",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            metadata: {
                type: "json",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            price: {
                type: "decimal",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            event_date: {
                type: "date",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            user_password: {
                type: "password",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
        });
    });
    test("should handle geo types", () => {
        const tableContent = `table locations {
  schema {
    int id
    geo_point location?
    geo_polygon area?
    geo_linestring route?
  }
}`;
        const result = (0, extractTableSchema_1.extractTableSchema)(tableContent);
        assert.deepStrictEqual(result, {
            id: {
                type: "int",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: false,
            },
            location: {
                type: "geo_point",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            area: {
                type: "geo_polygon",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            route: {
                type: "geo_linestring",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
        });
    });
    test("should handle media types", () => {
        const tableContent = `table media {
  schema {
    int id
    image profile_pic?
    video intro_video?
    audio voice_note?
    attachment document?
  }
}`;
        const result = (0, extractTableSchema_1.extractTableSchema)(tableContent);
        assert.deepStrictEqual(result, {
            id: {
                type: "int",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: false,
            },
            profile_pic: {
                type: "image",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            intro_video: {
                type: "video",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            voice_note: {
                type: "audio",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            document: {
                type: "attachment",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
        });
    });
    test("should handle empty schema block", () => {
        const tableContent = `table empty_table {
  schema {
  }
}`;
        const result = (0, extractTableSchema_1.extractTableSchema)(tableContent);
        assert.deepStrictEqual(result, {});
    });
    test("should handle table schema with default values", () => {
        const tableContent = `table users {
  schema {
    int id
    timestamp created_at?=now
    bool is_active?=true
    text status?="pending"
  }
}`;
        const result = (0, extractTableSchema_1.extractTableSchema)(tableContent);
        assert.deepStrictEqual(result, {
            id: {
                type: "int",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: false,
            },
            created_at: {
                type: "timestamp",
                default: "now",
                isArray: false,
                optional: false,
                nullable: false,
            },
            is_active: {
                type: "bool",
                default: "true",
                isArray: false,
                optional: false,
                nullable: false,
            },
            status: {
                type: "text",
                default: '"pending"',
                isArray: false,
                optional: false,
                nullable: false,
            },
        });
    });
    test("should handle deeply nested objects", () => {
        const tableContent = `table users {
  schema {
    int id
    text name?
    object preferences? {
      object notifications? {
        bool email?
        bool sms?
      }
      text timezone?
    }
    int age?
  }
}`;
        const result = (0, extractTableSchema_1.extractTableSchema)(tableContent);
        assert.deepStrictEqual(result, {
            id: {
                type: "int",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: false,
            },
            name: {
                type: "text",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            preferences: {
                type: "object",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            age: {
                type: "int",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
        });
    });
    test("should handle table with object and enum types", () => {
        const tableContent = `table products {
  schema {
    int id
    object metadata? {
      text manufacturer?
      text model?
    }
    enum status?
    text description?
  }
}`;
        const result = (0, extractTableSchema_1.extractTableSchema)(tableContent);
        assert.deepStrictEqual(result, {
            id: {
                type: "int",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: false,
            },
            metadata: {
                type: "object",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            status: {
                type: "enum",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
            description: {
                type: "text",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
        });
    });
    test("should handle required fields (without ?)", () => {
        const tableContent = `table users {
  schema {
    int id
    text name
    email email_address?
  }
}`;
        const result = (0, extractTableSchema_1.extractTableSchema)(tableContent);
        assert.deepStrictEqual(result, {
            id: {
                type: "int",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: false,
            },
            name: {
                type: "text",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: false,
            },
            email_address: {
                type: "email",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
        });
    });
    test("should handle schema block with extra whitespace", () => {
        const tableContent = `table users {
  schema {
    
    int    id
    
    text   name?
    
  }
}`;
        const result = (0, extractTableSchema_1.extractTableSchema)(tableContent);
        assert.deepStrictEqual(result, {
            id: {
                type: "int",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: false,
            },
            name: {
                type: "text",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
        });
    });
    test("should stop at closing brace of schema block", () => {
        const tableContent = `table users {
  schema {
    int id
    text name?
  }
  auth = false
  indexes {
    text should_not_appear
  }
}`;
        const result = (0, extractTableSchema_1.extractTableSchema)(tableContent);
        assert.deepStrictEqual(result, {
            id: {
                type: "int",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: false,
            },
            name: {
                type: "text",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
        });
    });
    test("should handle vector type", () => {
        const tableContent = `table documents {
  schema {
    int id
    vector[] embedding?
    text content?
  }
}`;
        const result = (0, extractTableSchema_1.extractTableSchema)(tableContent);
        assert.deepStrictEqual(result, {
            id: {
                type: "int",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: false,
            },
            embedding: {
                type: "vector",
                default: undefined,
                isArray: true,
                optional: false,
                nullable: true,
            },
            content: {
                type: "text",
                default: undefined,
                isArray: false,
                optional: false,
                nullable: true,
            },
        });
    });
});
//# sourceMappingURL=extractTableSchema.test.js.map