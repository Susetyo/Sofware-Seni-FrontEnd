import { getListByFilter } from "./actions";

export const filterList = (text: string, store: any) => {
    return (dispatch) => {
        fetch("https://api.github.com/users/" + text + "/repos")
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                if (res !== undefined && res.length > 0) {
                    dispatch(getListByFilter(res));
                } else {
                    dispatch(getListByFilter([]));
                }

                return res;
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
