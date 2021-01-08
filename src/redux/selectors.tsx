import { getListByFilter, getDetailListQuestion } from "./actions";

const filterWordsMoreThanOne = (words: any, question: string) => {
    let find = false;
    console.log(words);
    words.map((word: any) => {
        if (question.includes(word) == true) find = true;
    });

    return find;
};

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

export const detailListQuestion = (id: number, store: any) => {
    return (dispatch) => {
        console.log("number", id);
        const findList = store.listQuestionsData.filter((listQuestion: any) => {
            return listQuestion.id === id;
        });
        console.log("list", findList);
        dispatch(getDetailListQuestion(findList[0]));
    };
};
