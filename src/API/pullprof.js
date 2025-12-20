import axios from "./axios";


export async function pullProfiles(userid) {
    const res = await axios.post(
        '/auth/pullProfiles',
        userid
    );

    if (res.data === null) {
        throw new Error('No response from server');
    }

    return res.data;
}