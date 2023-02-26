# API Reference

## Categories API

- [List all categories](#get-categories)
- [Create category](#post-categories)

### GET: /categories

Use this endpoint when you need to retrieve all of the registered categories.

#### Response

```json
[
	{
		"id": <string>,
		"name": <string>,
		"description": <string>,
		"monthly_limit": <number>,
		"date": <date>
	}
]
```

#### cURL

```
curl --location 'http://localhost:8080/categories'
```

### POST: /categories

Use this API when you need to create a new category.

#### Request params

| Name            | Type | Datatype | Required |
| --------------- | ---- | -------- | -------- |
| `name`          | Body | `string` | **Yes**  |
| `description`   | Body | `string` | **No**   |
| `monthly_limit` | Body | `number` | **Yes**  |

#### Response

```json
{
	"id": <string>,
	"name": <string>,
	"description": <string>,
	"monthly_limit": <number>,
	"date": <date>
}
```

#### cURL

```sh
curl --location 'http://localhost:8080/categories' \
	--header 'Content-Type: application/json' \
	--data '{
		"name": "Essentials",
		"monthly_limit": 2000,
		"description": "Important, must have money."
	}'
```
