import { expect } from "chai";
import { describe, it } from "mocha";
import { xanoscriptParser } from "./parser.js";

describe("task_parser", () => {
  it("should parse a basic task", () => {
    const parser = xanoscriptParser(`task task_for_listing {
  stack {
  }

  schedule {
    events = []
  }
}`);
    expect(parser.errors).to.be.empty;
  });

  it("should parse an active task", () => {
    const parser = xanoscriptParser(`task task_for_listing {
  active = true
  stack {
  }

  schedule {
    events = [{starts_on: 2025-08-27 20:13:22+0000, freq: 86400}]
  }

  history = "inherit"
}`);
    expect(parser.errors).to.be.empty;
  });

  it("should parse a task with datasource", () => {
    const parser = xanoscriptParser(`task my_data_task {
  datasource = "primary_database"
  stack {
  }

  schedule {
    events = []
  }
}`);
    expect(parser.errors).to.be.empty;
  });

  it("should parse a task with all optional fields", () => {
    const parser = xanoscriptParser(`task comprehensive_task {
  active = true
  datasource = "analytics_db"
  description = "Comprehensive task example"
  docs = "Full documentation here"

  stack {
  }

  schedule {
    events = [{starts_on: 2025-08-27 20:13:22+0000, freq: 86400}]
  }

  history = "inherit"

  tags = ["production", "critical"]
}`);
    expect(parser.errors).to.be.empty;
  });
});
