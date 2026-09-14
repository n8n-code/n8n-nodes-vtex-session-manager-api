import type { INodeProperties } from 'n8n-workflow';

export const sessionsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					]
				}
			},
			"options": [
				{
					"name": "Get Session",
					"value": "Get Session",
					"action": "Get Session",
					"description": "Items are the keys of the values you wish to get. It follows the format `namespace1.key1,namespace2.key2`. So if you wish to recover the data sent on the previous request, it should be `public.country,public.postalCode`.\n\r\n\r> The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.\n\r\n\r> If you want to retrieve all keys from Session Manager, you can use the wildcard operator (`*`) in your request (i.e. `?items=*`).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sessions"
						}
					}
				},
				{
					"name": "Editsession",
					"value": "Editsession",
					"action": "Edit session",
					"description": "This works exactly the same as the POST create session, but when the request is sent with a vtex_session cookie, it retrieves the session first and then applies the changes instead of generating a new one.\n\r\n\rAs with the `POST` method, only keys inside the public namespace on the body are considered, and query parameters are automatically added to the public namespace.\n\r\n\r> The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sessions"
						}
					}
				},
				{
					"name": "Createnewsession",
					"value": "Createnewsession",
					"action": "Create new session",
					"description": "The response should contain a session cookie. Further `POST` or `PATCH` requests will edit the existing session rather than creating a new one. All parameters in the body that are not within the public namespace will be ignored. Query string items will automatically be added to the public namespace. Cookies relevant to the session manager execution are also recorded.\n\r\n\r> The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sessions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Get Session"
					]
				}
			}
		},
		{
			"displayName": "Items",
			"name": "items",
			"required": true,
			"description": "Items are the keys of the values you wish to get. It follows the format `namespace1.key1,namespace2.key2`",
			"default": "namespace1.key1,namespace2.key2",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "items",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Get Session"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Editsession"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Public",
			"name": "public",
			"type": "json",
			"default": "{\n  \"newValue\": {\n    \"value\": \"patched\"\n  }\n}",
			"routing": {
				"send": {
					"property": "public",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Editsession"
					]
				}
			}
		},
		{
			"displayName": "POST /sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Createnewsession"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Public",
			"name": "public",
			"type": "json",
			"default": "{\n  \"country\": {\n    \"value\": \"BR\"\n  },\n  \"postalCode\": {\n    \"value\": \"12345\"\n  }\n}",
			"routing": {
				"send": {
					"property": "public",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Createnewsession"
					]
				}
			}
		},
];
