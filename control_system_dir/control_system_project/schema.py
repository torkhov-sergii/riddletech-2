import graphene

import control_system_app.schema


class Query(control_system_app.schema.Query, graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass


class Mutation(control_system_app.schema.Mutations, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)


# import graphene
# import tasks.schema
#
# class Query(tasks.schema.Query, graphene.ObjectType):
#     # This class will inherit from multiple Queries
#     # as we begin to add more apps to our project
#     pass
#
# class Mutation(tasks.schema.Mutations, graphene.ObjectType):
#   	pass
#
# schema = graphene.Schema(query=Query, mutation=Mutation)