#!groovy

def getSetup()
{
    def setupList = [
        'npm update'
    ];

    return setupList;
}

def buildSetup()
{
    def list = getSetup();
    sh list.join(' && ');
}

node {
    checkout scm

    env.CONTINUOUS_INTEGRATION = 1;

    stage('Setup')
    {
        buildSetup();
    }

    stage('Code style')
    {
        sh 'npm run eslint';
    }

    stage('Unit tests')
    {
        sh 'npm test';
    }

    stage('Build')
    {
        sh 'npm run build';
    }
}
