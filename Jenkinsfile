pipeline {
    agent {
        docker { image 'node:8-alpine' }
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                withCredentials([file(credentialsId: 'netrc', variable: 'netrc')]) {
                    sh '''
                    npm i -g surge
                    cp \$netrc ~/.netrc
                    surge dist reactjs-bachnx.surge.sh
                    '''
                }
            }
        }
    }
}
