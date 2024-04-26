import { useState } from "react"
import "./style.css"

type PointType = "left" | "right"

export const LineView = () => {
    const [activePoint, setactivePoint] = useState<PointType>();
    const [angle, setAngle] = useState(0);
    /**
     * useCase change coords of one of dots
     *  - give x and y to dot from mouse position (may it's not needed)
     *  - rotate line and change its width according to the mouse position
     *  dot1Coords
     *  dot2Coords
     *  angle
     *  length
     */

    const handleMouseMove = (event: any) => {
        /**
         * 
         */
    }

    const handlePointClick = (pointType: PointType) => {
        window.addEventListener("mousemove", handleMouseMove)
        setactivePoint(pointType);
    }

    const handlePointMouseUp = () => {
        window.removeEventListener("mousemove", handleMouseMove)
    }

    return <div
        className="line"
        style={{
            transformOrigin: activePoint,
            transform: `rotate(${angle}deg)`
        }}
    >
        <div className="line__first-dot"></div>
        <div className="line__second-dot"></div>
        <div className="line__line"></div>
    </div>
}