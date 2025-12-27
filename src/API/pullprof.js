import axios from "./axios";


export async function pullProfiles(userid) {
    if (!userid) {
        throw new Error('Invalid userid');
    }

    const res = await axios.get(
        '/auth/pullProfiles',
        // 第二个参数就是 config，在get里
        //目前会传一个null字符串过去，正在排查原因
        {
            params: {
                userid: userid
            }
        }
    );

    if (res.data === null) {
        throw new Error('No response from server');
    }

    return res.data;
}