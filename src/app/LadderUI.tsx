import * as React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { LadderMain } from './LadderMain';

export interface ILadderUIProps
{
    app: LadderMain;
}

interface ILadderUIState
{
}

export class LadderUI extends React.Component<ILadderUIProps, ILadderUIState>
{
    constructor(props: ILadderUIProps)
    {
        super(props);

        this.state = {
        }
    }

    public componentDidMount(): void
    {

    }

    public render(): JSX.Element
    {
        return (
            <Router>
                <>
                    Hello World
                </>
            </Router>
        )
    }
}
