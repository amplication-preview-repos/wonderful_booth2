import { AgentAssignmentCreateNestedManyWithoutAgentsInput } from "./AgentAssignmentCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutAgentsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
