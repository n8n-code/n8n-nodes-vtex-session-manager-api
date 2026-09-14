import type { INodeProperties } from 'n8n-workflow';

export const segmentDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Segment"
					]
				}
			},
			"options": [
				{
					"name": "Get Segment",
					"value": "Get Segment",
					"action": "Get Segment",
					"description": "You can add certain public fields in the query string and the system will attempt to fulfill it. Values such as `cultureInfo` and `utm` are overwriteable, just keep in mind such changes will not be reflected in the client's session.\n\r\n\rIf you wish to change the value on the session (and thus be reflected on the segment without special query strings), then use the PATCH request to session.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/segments"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /segments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Segment"
					],
					"operation": [
						"Get Segment"
					]
				}
			}
		},
];
