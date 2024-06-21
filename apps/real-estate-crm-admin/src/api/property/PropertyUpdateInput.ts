import { AgentAssignmentUpdateManyWithoutPropertiesInput } from "./AgentAssignmentUpdateManyWithoutPropertiesInput";
import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  agentAssignments?: AgentAssignmentUpdateManyWithoutPropertiesInput;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  price?: number | null;
  status?: string | null;
  typeField?: string | null;
};
