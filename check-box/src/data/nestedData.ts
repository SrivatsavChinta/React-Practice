import { type CheckboxNode } from "../interfaces/checkbox";

export const nestedCheckboxData: CheckboxNode = {
  id: "root",
  label: "All Categories",
  children: [
    {
      id: "frontend",
      label: "Frontend",
      children: [
        {
          id: "frontend-html",
          label: "HTML",
        },
        {
          id: "frontend-css",
          label: "CSS",
          children: [
            {
              id: "frontend-css-flexbox",
              label: "Flexbox",
            },
            {
              id: "frontend-css-grid",
              label: "Grid",
            },
          ],
        },
        {
          id: "frontend-js",
          label: "JavaScript",
          children: [
            {
              id: "frontend-js-basics",
              label: "Basics",
            },
            {
              id: "frontend-js-advanced",
              label: "Advanced",
              children: [
                {
                  id: "frontend-js-advanced-closures",
                  label: "Closures",
                },
                {
                  id: "frontend-js-advanced-async",
                  label: "Async",
                  children: [
                    {
                      id: "frontend-js-advanced-async-promises",
                      label: "Promises",
                    },
                    {
                      id: "frontend-js-advanced-async-asyncawait",
                      label: "Async / Await",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "backend",
      label: "Backend",
      children: [
        {
          id: "backend-node",
          label: "Node.js",
          children: [
            {
              id: "backend-node-express",
              label: "Express",
            },
            {
              id: "backend-node-nest",
              label: "NestJS",
            },
          ],
        },
        {
          id: "backend-db",
          label: "Databases",
          children: [
            {
              id: "backend-db-sql",
              label: "SQL",
              children: [
                {
                  id: "backend-db-sql-postgres",
                  label: "PostgreSQL",
                },
                {
                  id: "backend-db-sql-mysql",
                  label: "MySQL",
                },
              ],
            },
            {
              id: "backend-db-nosql",
              label: "NoSQL",
              children: [
                {
                  id: "backend-db-nosql-mongo",
                  label: "MongoDB",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "devops",
      label: "DevOps",
      children: [
        {
          id: "devops-ci",
          label: "CI / CD",
          children: [
            {
              id: "devops-ci-github",
              label: "GitHub Actions",
            },
            {
              id: "devops-ci-gitlab",
              label: "GitLab CI",
            },
          ],
        },
        {
          id: "devops-cloud",
          label: "Cloud",
          children: [
            {
              id: "devops-cloud-aws",
              label: "AWS",
              children: [
                {
                  id: "devops-cloud-aws-ec2",
                  label: "EC2",
                },
                {
                  id: "devops-cloud-aws-s3",
                  label: "S3",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
