import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class VtexSessionManagerApiApi implements ICredentialType {
        name = 'N8nDevVtexSessionManagerApiApi';

        displayName = 'Vtex Session Manager API';

        icon: Icon = { light: 'file:../nodes/VtexSessionManagerApi/vtex-session-manager-api.svg', dark: 'file:../nodes/VtexSessionManagerApi/vtex-session-manager-api.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://vtex.local',
                        required: true,
                        placeholder: 'https://vtex.local',
                        description: 'The base URL of your Vtex Session Manager API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-VTEX-API-AppKey': '={{$credentials.apiKey}}',
                        },
                },
        };


}
