// src/server.ts
import 'module-alias/register'

import app from './app'

const port = process.env.PORT || 8000

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
)
