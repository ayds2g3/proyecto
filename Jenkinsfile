node {
    stage("Scm Checkout"){
        git credentialsId: 'git-creds', url: 'https://github.com/ayds2g3/proyecto.git'

    }
    stage("Node Package"){
        sh label: '', script: 'npm install'
    }
    stage("Build Docker Image"){
        sh 'docker build -t analisis2grupo3/proyecto .'
    }
    //a partir de aqui, falla..
    stage("Push Docker Image"){
        withCredentials([string(credentialsId: 'a27ae0ec-42ec-42a4-9090-487eae82a55f', variable: 'pswd')]) {
            sh 'docker login -u pablorrp -p ${pswd}'
        }
        sh 'docker push analisis2grupo3/proyecto'
    }

}