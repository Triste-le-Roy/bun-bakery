import {Context} from "../../lib"

export async function GET(ctx: Context) {
    ctx.sendAsJson({});
}