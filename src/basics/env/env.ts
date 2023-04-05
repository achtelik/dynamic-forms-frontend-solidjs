// @ts-nocheck
export const env = {
    auth: {
        idpUrl: ((window as any)['env']?.['auth_idpUrl'] || '') as string,
        idpClientId: ((window as any)['env']?.['auth_idpClientId'] || '') as string,
    },
    backend: {
        apiUrl: import.meta.env.BACKEND_API_URL
    }
};
