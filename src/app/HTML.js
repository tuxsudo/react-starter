export default ({title="", meta="", links="", content="", initialState={}, env={} }) => `
<html>
    <head>
        <meta charset="utf-8">
        ${title}
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${meta}
        ${links}
        <link href=/static/app.css rel=stylesheet>

    </head>

    <body>
        <div id=app>${content}</div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
            window.__APP_ENV_VARS__ = ${JSON.stringify(env)};
        </script>
        <script type=text/javascript src=/static/app.js charset=utf-8 async></script>
    </body>
</html>
`;
