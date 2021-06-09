import { JobListClient } from "./generated/job-corridor/job-list_grpc_web_pb"
import { JobListBatchRequest } from "./generated/job-corridor/job-list_pb";

const client = new JobListClient("https://local.api.local.faethm.ai:443");

export const getJobListStreamCallObj = () => {
  const request = new JobListBatchRequest();
  request.setBatchsize(10);
  return client.getJobListBatchStream(request, {} );
};
