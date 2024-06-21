import { AgentAssignmentListRelationFilter } from "../agentAssignment/AgentAssignmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AgentWhereInput = {
  agentAssignments?: AgentAssignmentListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
