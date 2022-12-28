import { ViewerConnectionState } from "@self.id/framework";

// "idle" | "failed" | "connecting" | "connected"
export type ConnectionStatus = Partial<ViewerConnectionState["status"]>;
export enum CONNECTION {
  idle = "idle",
  failed = "failed",
  connecting = "connecting",
  connected = "connected",
}
