import React, { useRef } from "react"
import BoxFull from "./BoxFull"
import ChartComponent from "react-chartjs-2"
import Loading from "./Loading"


export default function BoxChart({chartProps, ...props}) {
    const getCssVar = (variable) => {
        const computedStyle = window.getComputedStyle(document.querySelector("main"))
        return computedStyle.getPropertyValue(variable).trim()
    }

    return (
        <BoxFull {...props}>
            <ChartComponent
                options={{
                    responsive: true,
                    scales: {
                        x: {
                            beginAtZero: true,
                            grid: {
                                borderColor: getCssVar("--bg-light"),
                                color: getCssVar("--bg-light"),
                            },
                            ticks: {
                                color: getCssVar("--fg-primary"),
                            }
                        },
                        y: {
                            beginAtZero: true,
                            grid: {
                                borderColor: getCssVar("--bg-light"),
                                color: getCssVar("--bg-light"),
                            },
                            ticks: {
                                color: getCssVar("--fg-primary"),
                            }
                        },
                    },
                    elements: {
                        bar: {
                            backgroundColor: getCssVar("--fg-primary"),
                            borderColor: "transparent",
                            color: getCssVar("--fg-primary"),
                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                        }
                    }
                }}
                {...chartProps}
            />
        </BoxFull>
    )
}
