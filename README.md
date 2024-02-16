## Project Made using Node.js

## Run Project in Dev Mode?

```bash
$ docker compouse up
```

## Approach

Stack - Node.js + TS and MongoDB. Used TypeORM due to its suppport for typescript and robust approach towards db realted operations. This was a failrly simple crud API so I decided to use Entity Manager strategy in typeorm.

Create Read Update Delete users along with input validation using class-validators package which will make it easy to add more modules. I prefer to use Nest.js for APIs with multiple modules so I tried to make the code modular so that new modules can be integrated easily. The api includes respose transformation and error handling.
