import app from './config/app';

const server = app.listen(app.get('port'), () => {
    console.log(
        '   App is running at http://localhost:%d in %s mode',
        app.get('port'),
        app.get('env')
    );
    console.log('   Press CTRL-C to stop or CTRL + \\ for kill process \n');
});

export default server;
