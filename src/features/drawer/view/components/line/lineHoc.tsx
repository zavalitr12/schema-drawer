import { LineView } from "./lineView"

const withLine = (View: any) => () => {
    return <View />
}

export const Line = withLine(LineView)