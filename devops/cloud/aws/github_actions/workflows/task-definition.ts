module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "mongo-4266",
            "image": "geppettotest/mongo-local:april2020",
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "27017",
                    "protocol": "tcp",
                    "hostPort": "27017"
                }
            ],
            "environmentFiles": null,
            "environment": [{
                "name": "MONGO_INITDB_ROOT_PASSWORD",
                "value": "password"
              },
              {
                "name": "MONGO_INITDB_ROOT_USERNAME",
                "value": "admin"
              }],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/data/db",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "camunda-4266",
            "image": "geppettodistribution/camunda-local:Jan2021",
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8080",
                    "protocol": "tcp",
                    "hostPort": "8080"
                }
            ],
            "environmentFiles": null,
            "environment": null,
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "apigateway-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-apigateway:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8000",
                    "protocol": "tcp",
                    "hostPort": "8000"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}
            ,{"name":"GEPFILEMANAGERURL","value":"http://127.0.0.1:3015"}
            ,{"name":"APIGATEWAYURL","value":"http://127.0.0.1:8000"}
            ,{"name":"MONGOURL","value":"http://127.0.0.1:3009"}
            ,{"name":"SECURITYURL","value":"http://127.0.0.1:3007"}
            ,{"name":"AUTHPROXYURL","value":"http://127.0.0.1:3009"}
            ,{"name":"GCAMURL","value":"http://127.0.0.1:8007"}
            ,{"name":"ADMINURL","value":"http://127.0.0.1:3010"}
            ,{"name":"CAMUNDAURL","value":"http://127.0.0.1:3008"}
            ,{"name":"SYSTEMCREDENTIALMANAGERURL","value":"http://127.0.0.1:8005"}
            ,{"name":"SYSTEMENTRYURL","value":"http://127.0.0.1:8010"}
            ],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },        
        {
            "name": "authproxy-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-authproxy:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8001",
                    "protocol": "tcp",
                    "hostPort": "8001"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "camundasvc-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-camunda:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8002",
                    "protocol": "tcp",
                    "hostPort": "8002"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "gcam-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-gcam:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8007",
                    "protocol": "tcp",
                    "hostPort": "8007"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "gepfilemanager-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-gepfilemanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "3015",
                    "protocol": "tcp",
                    "hostPort": "3015"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "securitymanager-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-securitymanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8003",
                    "protocol": "tcp",
                    "hostPort": "8003"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "systemcredentialmanager-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-securitymanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8005",
                    "protocol": "tcp",
                    "hostPort": "8005"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
          
        {
            "name": "gepfilemanager-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-gepfilemanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "3015",
                    "protocol": "tcp",
                    "hostPort": "3015"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
          
        {
            "name": "apigateway-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-apigateway:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8000",
                    "protocol": "tcp",
                    "hostPort": "8000"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
          
        {
            "name": "mongo-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-mongo:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "3009",
                    "protocol": "tcp",
                    "hostPort": "3009"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
          
        {
            "name": "security-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-security:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "3007",
                    "protocol": "tcp",
                    "hostPort": "3007"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
          
        {
            "name": "Authproxy-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-Authproxy:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "3009",
                    "protocol": "tcp",
                    "hostPort": "3009"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
          
        {
            "name": "gcam-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-gcam:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8007",
                    "protocol": "tcp",
                    "hostPort": "8007"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
          
        {
            "name": "Admin-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-Admin:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "3010",
                    "protocol": "tcp",
                    "hostPort": "3010"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
          
        {
            "name": "Camunda-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-Camunda:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "3008",
                    "protocol": "tcp",
                    "hostPort": "3008"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
          
        {
            "name": "systemcredentialmanager-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-systemcredentialmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8005",
                    "protocol": "tcp",
                    "hostPort": "8005"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
          
        {
            "name": "systementry-4266",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-san-4266-systementry:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8010",
                    "protocol": "tcp",
                    "hostPort": "8010"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/san_4266?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "san"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/san",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "san",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "san",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
