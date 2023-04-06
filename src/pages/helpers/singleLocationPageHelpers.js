// Components
import StarShape from '../../components/Svgs/StarShape'

export const displayEquipmentList = (equipments) => {

    if (equipments && equipments.length) {

        const equipmentNode = []

        for (const [i, equipment] of equipments.entries()) {
            equipmentNode.push(<span className="collabsible--content-elt" key={`equipment-${i}`}>{equipment}</span>)
        }

        return equipmentNode
    }

}

export const displayNotation = (note) => {

    if (note) {

        const noteNode = []

        for (let i = 0; i < note; i++) {
            noteNode.push(<span key={`filled-star-${i}`} className='location__infos-notation-star filled'><StarShape /></span>)
        }

        for (let i = 0; i < (5 - note); i++) {
            noteNode.push(<span key={`star-${i}`} className='location__infos-notation-star'><StarShape /></span>)
        }

        return noteNode

    }

}