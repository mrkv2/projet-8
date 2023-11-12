/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import './thumb.scss'

export default function Thumb({ appart, onClick }) {
    return (
        <div onClick={onClick} className="thumb">
            <Link to={`/logement/${appart.id}`}>
                <article>
                    <img src={appart.cover} alt={appart.title} />
                    <h2>{appart.title}</h2>
                </article>
            </Link>
        </div>
    )
}