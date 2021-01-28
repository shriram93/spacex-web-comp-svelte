<script>
    import launchProgramsDump from "./launchProgramsDump";
    let launchPrograms = launchProgramsDump.map((launchProgram) => {
        const {
            mission_name,
            flight_number,
            launch_year,
            launch_success,
            mission_id,
            rocket,
            links,
        } = launchProgram;
        return {
            missonname: mission_name,
            flightnumber: flight_number,
            launchyear: launch_year,
            launchsuccess: launch_success,
            missionids: mission_id.join(','),
            imageurl: links.mission_patch_small,
            landSuccess: rocket.first_stage.cores[0].land_success,
        };
    });
</script>

<style>
    .launch-program {
        height: 100%;
    }
    .launch-program__cards {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
    }
    .launch-program__cards__card {
        padding: 8px;
        width: 100%;
        display: inline-block;
    }
    .launch-program__cards__card--dummy {
        height: 30vh;
        display: none;
    }
    .launch-program__cards__card--dummy:last-child {
        display: block;
    }
    @media (min-width: 700px) {
        .launch-program {
            display: flex;
        }
        .launch-program__filter {
            width: 25%;
        }
        .launch-program__cards {
            flex: 1;
            overflow-y: scroll;
        }
        .launch-program__cards__card {
            width: 50%;
        }
        .launch-program__cards__card--dummy:nth-child(odd) {
            display: block;
        }
    }
    @media screen and (min-width: 1024px) {
        .launch-program__filter {
            width: 15%;
        }
        .launch-program__cards__card {
            width: 25%;
        }
        .launch-program__cards__card--dummy {
            display: block;
        }
    }
</style>

<div class="launch-program">
    <div class="launch-program__cards">
        {#each launchPrograms as launchProgram}
            <div class="launch-program__cards__card">
                <spacex-card {...launchProgram} />
            </div>
        {/each}
        {#if launchPrograms.length < 5}
            <div
                class="launch-program__cards__card launch-program__cards__card--dummy" />
            <div
                class="launch-program__cards__card launch-program__cards__card--dummy" />
            <div
                class="launch-program__cards__card launch-program__cards__card--dummy" />
            <div
                class="launch-program__cards__card launch-program__cards__card--dummy" />
        {/if}
    </div>
</div>
