import { AgentAssignment } from "../agentAssignment/AgentAssignment";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  agentAssignments?: Array<AgentAssignment>;
  appointments?: Array<Appointment>;
  createdAt: Date;
  id: string;
  price: number | null;
  status: string | null;
  typeField: string | null;
  updatedAt: Date;
};
