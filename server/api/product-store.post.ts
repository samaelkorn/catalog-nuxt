import { writeFile } from 'fs/promises'
import { serverSupabaseClient } from '#supabase/server'
import path from 'path'

export default eventHandler(async (event) => {
    const insertData: any = {}
    const data: any = await readMultipartFormData(event)
    const formData: any = await readFormData(event)
    const file = data.find((item: any) => item.name === 'image')
    if (!file) {
        return { error: 'not file' }
    }
    
    await writeFile(path.join('public', 'img', file.filename), file.data)

    for (const key of formData.keys()) {
        if (key === 'image') {
            insertData[key] = `/img/${file.filename}`
        } else {
            insertData[key] = formData.get(key)
        }
    }

    const client = await serverSupabaseClient(event)
    const { error } = await client.from('products').insert(insertData)
    return { error: error }
})