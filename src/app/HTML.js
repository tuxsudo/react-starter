export default ({title="", meta="", links="", content="", initialState={} }) => `
<html>
    <head>
        <meta charset="utf-8">
        ${title}
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${meta}
        ${links}
        <link href=/app.css rel=stylesheet>

    </head>

    <body>
        <div id=app>${content}</div>
        <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)} </script>
        <script type=text/javascript src=/app.js charset=utf-8 async></script>
    </body>
</html>
`;
