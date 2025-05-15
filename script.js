function scrollToCharacters() {
    const protagonistSection = document.getElementById("mainprotagonistsection1");
    const diaryHoldersSection = document.getElementById("diaryholders");

    const isDiaryVisible = diaryHoldersSection.style.display !== "none";
    
    if (isDiaryVisible) {
        diaryHoldersSection.scrollIntoView({ behavior: "smooth" });
    } else {
        protagonistSection.scrollIntoView({ behavior: "smooth" });
    }
}

function showdiaryholders() {
    document.getElementById("mainprotagonistsection1").style.display = "none";
    document.getElementById("diaryholders").style.display = "block";
    startCuboidAnimation();
}

function showmainprotagonistsection1() {
    document.getElementById("diaryholders").style.display = "none";
    document.getElementById("mainprotagonistsection1").style.display = "flex";
}

let position = 0;

if (slots) {
    function scrollLeft() {
        position -= 300;
        if (position < -3600) position = -3600;
        slots.style.transform = `translateX(${position}px)`;
        slots.style.transition = "transform 0.5s ease";
    }

    function scrollRight() {
        position += 300;
        if (position > 0) position = 0;
        slots.style.transform = `translateX(${position}px)`;
        slots.style.transition = "transform 0.5s ease";
    }
}

function startCuboidAnimation() {
    let cuboid = document.getElementById("cuboid");
    if (!cuboid) return;

    let moveSpeed = 50;
    let delay = 500;

    // Ensure initial position is set
    if (!cuboid.style.left) {
        cuboid.style.left = "0px";
    }

    function moveCuboid() {
        let currentLeft = parseInt(cuboid.style.left) || 0;
        cuboid.style.left = `${currentLeft + moveSpeed}px`;

        moveSpeed *= 0.8;
        delay += 300;

        if (moveSpeed > 2) {
            setTimeout(moveCuboid, delay);
        }
    }

    moveCuboid();
}