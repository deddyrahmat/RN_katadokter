const mainColors = {
    green1 : '#0BCAD4',
    green2 : '#EDFCFD',
    dark1 : '#112340',
    dark2 : '#495A75',
    dark3 : '#8092AF',
    dark4 : '#EDEEF0',
    grey1 : '#7D8797',
    grey2 : '#E9E9E9',
    blue : '#0066CB'
}

export const colors = {
    primary : mainColors.green1,
    secondary : mainColors.dark1,
    disabled : mainColors.dark4,
    white : 'white',
    black : 'black',
    tertiery : mainColors.blue,
    text : {
        primary : mainColors.dark1,
        secondary : mainColors.grey1,
        inactive : mainColors.dark2,
        active : mainColors.green1,
        subTitle : mainColors.dark3
    },
    button : {
        primary : {
            background : mainColors.green1,
            text : 'white'
        },
        secondary : {
            background : 'white',
            text : mainColors.dark1    
        }
    },
    border : mainColors.grey2,
    cardLight : mainColors.green2
}