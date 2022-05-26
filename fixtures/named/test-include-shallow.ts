import * as functions from 'firebase-functions'

type Params = Record<any, any>
type Return = {
    result: 'success' | 'failed'
}

export const includeTestShallow = functions
    .region('asia-northeast1')
    .runWith({
        memory: '1GB'
    })
    .https.onCall((data: Params,_): Return => {
        return {
            result: 'success'
        }
    })
