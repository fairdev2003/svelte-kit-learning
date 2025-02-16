<script>
    import Navbar from "../components/navbar.svelte";
    import "../app.css";
    import Sidebar from "../components/Sidebar.svelte";
</script>

<body class="main">
    <Sidebar/>
    <Navbar/>
    <slot/>
</body>

<style>
    @font-face {
        font-family: Faithful;
        src: url(../assets/fonts/Faithful.ttf);
    }

    .main {
            font-family: "Faithful", serif;
            font-weight: bold;
            font-style: normal;
    }

</style>
