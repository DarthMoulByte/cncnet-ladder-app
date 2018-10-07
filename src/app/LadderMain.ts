import * as React from "react";
import { render } from "react-snapshot";
import { LadderUI } from './LadderUI';

export class LadderMain
{
    constructor()
    {
        this.render();
    }

    public render(): void
    {
        render(React.createElement(LadderUI, { app: this }), document.getElementById("app"));
    }
}
