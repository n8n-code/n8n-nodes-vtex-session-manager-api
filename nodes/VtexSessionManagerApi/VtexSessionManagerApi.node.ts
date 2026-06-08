import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { sessionsDescription } from './resources/sessions';
import { segmentDescription } from './resources/segment';

export class VtexSessionManagerApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'vtex-session-manager-api',
		name: 'N8nDevVtexSessionManagerApi',
		icon: { light: 'file:./vtex-session-manager-api.svg', dark: 'file:./vtex-session-manager-api.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'This documentation goes in detail how to interact with Session Manager\'s API. For a more top-level approach, check the [design documentation](https://help.vtex.com/tutorial/using-session-manager-to..',
		defaults: { name: 'vtex-session-manager-api' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevVtexSessionManagerApiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Sessions",
					"value": "Sessions",
					"description": ""
				},
				{
					"name": "Segment",
					"value": "Segment",
					"description": ""
				}
			],
			"default": ""
		},
		...sessionsDescription,
		...segmentDescription
		],
	};
}
