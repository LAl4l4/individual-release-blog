import axios from "./axios";


export async function pullProfiles(userid) {
    if (!userid) {
        throw new Error('Invalid userid');
    }

    const res = await axios.get(
        '/auth/pullProfiles',
        // 第二个参数就是 config，在get里
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

export async function updateProfile(data) {
    if (!data || !data.userid) {
        throw new Error('Invalid data');
    }

    const res = await axios.post('/auth/pushProfile', data);

    if (res.data === null) {
        throw new Error('No response from server');
    }

    return res.data;
}