class Grid {
    constructor(i, j, isStart = false, isEnd = false, isWall = false) {
        this.i = i
        this.j = j
        this.isWall = isWall
        this.isPath = false
        this.isExplored = false
        this.isStart = isStart
        this.parent = null
        this.isFrontier = false
        this.isEnd = isEnd
        this.g = null
        this.h = null
        this.f = null
        this.wallFade = this.isWall ? 1 : 0; // opacity for wall fade-in
    }

    show() {
        fill(255)
        stroke(0)
        strokeWeight(1)
        // Fade-in animation for wall cells
        if (this.isWall) {
            if (this.wallFade < 1) {
                this.wallFade += 0.08; // speed of fade-in
            }
            fill(`rgba(29,53,87,${this.wallFade})`); // #1d3557
        }
        else {
            this.wallFade = 0;
            if (this.isStart) {
                fill('#0077b6');
            }
            else if (this.isEnd) {
                fill('#ff4d6d');
            }
            else if (this.isPath) {
                fill('#90e0ef');
            }
            else if (this.isExplored && !this.isStart && !this.isEnd && !this.isPath) {
                fill(150);
            }
        }
        if (movingStart && this.isStart) {
            fill('rgba(0,0,255,0.5)')
        }
        if (movingEnd && this.isEnd) {
            fill('rgba(255,0,0,0.5)')
        }
        if (this.isFrontier) {
            fill(0, 255, 0)
        }
        rect(this.j * LENGTH, this.i * LENGTH, LENGTH - 1, LENGTH - 1)
    }
}