export function flyBy(lamps: string, drone: string): string {
    let lmpArray = lamps.split('');
    const droneArray = drone.split('');
    droneArray.forEach((p, index) => {

        if (lmpArray[index] == 'x') {
            lmpArray[index] = 'o'
        }

    })
    return lmpArray.join('');


}