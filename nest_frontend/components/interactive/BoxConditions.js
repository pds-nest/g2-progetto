import React from "react"
import BoxFull from "../base/BoxFull"
import ConditionBadge from "./ConditionBadge"
import useRepositoryEditor from "../../hooks/useRepositoryEditor"
import Localization from "../../Localization"


/**
 * A box which renders all conditions of the {@link RepositoryEditor} as {@link ConditionBadge}s.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function BoxConditions({ ...props }) {
    const { conditions } = useRepositoryEditor()

    const badges = conditions.map((cond, pos) => <ConditionBadge key={pos} {...cond}/>)

    return (
        <BoxFull header={Localization.conditions} {...props}>
            {badges}
        </BoxFull>
    )
}
