"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRealtimeTrigger = exports.createRealtimeTriggerFromXs = exports.createRealtimeTrigger = exports.updateRealtimeTrigger = exports.fetchRealtimeTrigger = exports.fetchRealtimeTriggers = exports.deleteRealtimeChannel = exports.createRealtimeChannelFromXs = exports.createRealtimeChannel = exports.updateRealtimeChannel = exports.fetchRealtimeChannel = exports.fetchRealtimeChannels = void 0;
const request_1 = require("./request");
function fetchRealtimeChannels(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        let nextPage = 1;
        const channels = [];
        const queryParams = new URLSearchParams();
        queryParams.set("per_page", "20");
        queryParams.set("include_xanoscript", "true");
        while (nextPage) {
            queryParams.set("page", nextPage.toString());
            const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/realtime/channel?${queryParams.toString()}`);
            channels.push(...response.items);
            nextPage = response.nextPage;
        }
        return channels;
    });
}
exports.fetchRealtimeChannels = fetchRealtimeChannels;
function fetchRealtimeChannel(instanceName, workspaceId, channelId) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/realtime/channel/${channelId}?${queryParams.toString()}`);
    });
}
exports.fetchRealtimeChannel = fetchRealtimeChannel;
function updateRealtimeChannel(instanceName, workspaceId, channelId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/realtime/channel/${channelId}?${queryParams.toString()}`, {
            method: "PUT",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.updateRealtimeChannel = updateRealtimeChannel;
function createRealtimeChannel(instanceName, workspaceId, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const xanoscript = `realtime_channel ${name} {
  public_messaging = {active: false}
  private_messaging = {active: false}
  settings = {
    anonymous_clients: false
    nested_channels  : false
    message_history  : 0
    auth_channel     : false
    presence         : false
  }
}`;
        const queryParams = new URLSearchParams();
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/realtime/channel?${queryParams.toString()}`, {
            method: "POST",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createRealtimeChannel = createRealtimeChannel;
function createRealtimeChannelFromXs(instanceName, workspaceId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/realtime/channel?${queryParams.toString()}`, {
            method: "POST",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createRealtimeChannelFromXs = createRealtimeChannelFromXs;
function deleteRealtimeChannel(instanceName, workspaceId, channelId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/realtime/channel/${channelId}`, {
            method: "DELETE",
        });
    });
}
exports.deleteRealtimeChannel = deleteRealtimeChannel;
function fetchRealtimeTriggers(instanceName, workspaceId) {
    return __awaiter(this, void 0, void 0, function* () {
        let nextPage = 1;
        const triggers = [];
        const queryParams = new URLSearchParams();
        queryParams.set("per_page", "20");
        queryParams.set("include_xanoscript", "true");
        while (nextPage) {
            queryParams.set("page", nextPage.toString());
            const response = yield (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/realtime/channel/trigger?${queryParams.toString()}`);
            triggers.push(...response.items);
            nextPage = response.nextPage;
        }
        return triggers;
    });
}
exports.fetchRealtimeTriggers = fetchRealtimeTriggers;
function fetchRealtimeTrigger(instanceName, workspaceId, triggerId) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/realtime/trigger/${triggerId}?${queryParams.toString()}`);
    });
}
exports.fetchRealtimeTrigger = fetchRealtimeTrigger;
function updateRealtimeTrigger(instanceName, workspaceId, triggerId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/realtime/trigger/${triggerId}?${queryParams.toString()}`, {
            method: "PUT",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.updateRealtimeTrigger = updateRealtimeTrigger;
function createRealtimeTrigger(instanceName, workspaceId, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("include_xanoscript", "true");
        const xanoscript = `realtime_trigger ${name} {
  channel = "channel_name"
  input {
    enum action {
      values = ["message", "join"]
    }
    text channel
    object client {
      schema {
        json extras
        object permissions {
          schema {
            int dbo_id
            text row_id
          }
        }
      }
    }
    object options {
      schema {
        bool authenticated
        text channel
      }
    }
    json payload
  }
  stack {
    var $x1 {
      value = 123
    }
  }
  actions = {join: true}
}`;
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/realtime/trigger?${queryParams.toString()}`, {
            method: "POST",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createRealtimeTrigger = createRealtimeTrigger;
function createRealtimeTriggerFromXs(instanceName, workspaceId, xanoscript) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryParams = new URLSearchParams();
        queryParams.set("include_xanoscript", "true");
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/realtime/trigger?${queryParams.toString()}`, {
            method: "POST",
            body: xanoscript,
            headers: {
                "Content-Type": "text/x-xanoscript",
            },
        });
    });
}
exports.createRealtimeTriggerFromXs = createRealtimeTriggerFromXs;
function deleteRealtimeTrigger(instanceName, workspaceId, triggerId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, request_1.metadataInstanceRequest)(instanceName, `workspace/${workspaceId}/realtime/trigger/${triggerId}`, {
            method: "DELETE",
        });
    });
}
exports.deleteRealtimeTrigger = deleteRealtimeTrigger;
//# sourceMappingURL=realtime.js.map