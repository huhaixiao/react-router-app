export const sleep = (delaytime = 1000) => {
    return new Promise(resolve => setTimeout(resolve, delaytime));
};
