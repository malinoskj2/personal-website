const requests = [
  { name: 'repos', subPath: '/repos', method: 'GET' },
  { name: 'commits', subPath: '/commits', method: 'GET' },
  { name: 'statuses', subPath: '/statuses', method: 'GET' },
];

function addRequests(api) {
  requests.forEach((req) => {
    const { name, subPath, method } = req;
    api.add_request(name, subPath, method);
  });
}

export default async function () {
  const wasmLib = await import('@/lib/pkg');
  const api = new wasmLib.Api(process.env.VUE_APP_API_BASE, true);
  addRequests(api);
  return api;
}
