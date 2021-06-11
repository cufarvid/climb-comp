export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateCategory = {
  __typename?: 'AggregateCategory';
  _avg?: Maybe<CategoryAvgAggregate>;
  _count?: Maybe<CategoryCountAggregate>;
  _max?: Maybe<CategoryMaxAggregate>;
  _min?: Maybe<CategoryMinAggregate>;
  _sum?: Maybe<CategorySumAggregate>;
};

export type AggregateCategoryRound = {
  __typename?: 'AggregateCategoryRound';
  _avg?: Maybe<CategoryRoundAvgAggregate>;
  _count?: Maybe<CategoryRoundCountAggregate>;
  _max?: Maybe<CategoryRoundMaxAggregate>;
  _min?: Maybe<CategoryRoundMinAggregate>;
  _sum?: Maybe<CategoryRoundSumAggregate>;
};

export type AggregateClub = {
  __typename?: 'AggregateClub';
  _avg?: Maybe<ClubAvgAggregate>;
  _count?: Maybe<ClubCountAggregate>;
  _max?: Maybe<ClubMaxAggregate>;
  _min?: Maybe<ClubMinAggregate>;
  _sum?: Maybe<ClubSumAggregate>;
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  _avg?: Maybe<CommentAvgAggregate>;
  _count?: Maybe<CommentCountAggregate>;
  _max?: Maybe<CommentMaxAggregate>;
  _min?: Maybe<CommentMinAggregate>;
  _sum?: Maybe<CommentSumAggregate>;
};

export type AggregateCompetition = {
  __typename?: 'AggregateCompetition';
  _avg?: Maybe<CompetitionAvgAggregate>;
  _count?: Maybe<CompetitionCountAggregate>;
  _max?: Maybe<CompetitionMaxAggregate>;
  _min?: Maybe<CompetitionMinAggregate>;
  _sum?: Maybe<CompetitionSumAggregate>;
};

export type AggregateCompetitionType = {
  __typename?: 'AggregateCompetitionType';
  _avg?: Maybe<CompetitionTypeAvgAggregate>;
  _count?: Maybe<CompetitionTypeCountAggregate>;
  _max?: Maybe<CompetitionTypeMaxAggregate>;
  _min?: Maybe<CompetitionTypeMinAggregate>;
  _sum?: Maybe<CompetitionTypeSumAggregate>;
};

export type AggregateCompetitor = {
  __typename?: 'AggregateCompetitor';
  _avg?: Maybe<CompetitorAvgAggregate>;
  _count?: Maybe<CompetitorCountAggregate>;
  _max?: Maybe<CompetitorMaxAggregate>;
  _min?: Maybe<CompetitorMinAggregate>;
  _sum?: Maybe<CompetitorSumAggregate>;
};

export type AggregateCountry = {
  __typename?: 'AggregateCountry';
  _avg?: Maybe<CountryAvgAggregate>;
  _count?: Maybe<CountryCountAggregate>;
  _max?: Maybe<CountryMaxAggregate>;
  _min?: Maybe<CountryMinAggregate>;
  _sum?: Maybe<CountrySumAggregate>;
};

export type AggregateGrade = {
  __typename?: 'AggregateGrade';
  _avg?: Maybe<GradeAvgAggregate>;
  _count?: Maybe<GradeCountAggregate>;
  _max?: Maybe<GradeMaxAggregate>;
  _min?: Maybe<GradeMinAggregate>;
  _sum?: Maybe<GradeSumAggregate>;
};

export type AggregateLocation = {
  __typename?: 'AggregateLocation';
  _avg?: Maybe<LocationAvgAggregate>;
  _count?: Maybe<LocationCountAggregate>;
  _max?: Maybe<LocationMaxAggregate>;
  _min?: Maybe<LocationMinAggregate>;
  _sum?: Maybe<LocationSumAggregate>;
};

export type AggregateRegion = {
  __typename?: 'AggregateRegion';
  _avg?: Maybe<RegionAvgAggregate>;
  _count?: Maybe<RegionCountAggregate>;
  _max?: Maybe<RegionMaxAggregate>;
  _min?: Maybe<RegionMinAggregate>;
  _sum?: Maybe<RegionSumAggregate>;
};

export type AggregateRegistration = {
  __typename?: 'AggregateRegistration';
  _avg?: Maybe<RegistrationAvgAggregate>;
  _count?: Maybe<RegistrationCountAggregate>;
  _max?: Maybe<RegistrationMaxAggregate>;
  _min?: Maybe<RegistrationMinAggregate>;
  _sum?: Maybe<RegistrationSumAggregate>;
};

export type AggregateResult = {
  __typename?: 'AggregateResult';
  _avg?: Maybe<ResultAvgAggregate>;
  _count?: Maybe<ResultCountAggregate>;
  _max?: Maybe<ResultMaxAggregate>;
  _min?: Maybe<ResultMinAggregate>;
  _sum?: Maybe<ResultSumAggregate>;
};

export type AggregateRoute = {
  __typename?: 'AggregateRoute';
  _avg?: Maybe<RouteAvgAggregate>;
  _count?: Maybe<RouteCountAggregate>;
  _max?: Maybe<RouteMaxAggregate>;
  _min?: Maybe<RouteMinAggregate>;
  _sum?: Maybe<RouteSumAggregate>;
};

export type AggregateScoreBoulder = {
  __typename?: 'AggregateScoreBoulder';
  _avg?: Maybe<ScoreBoulderAvgAggregate>;
  _count?: Maybe<ScoreBoulderCountAggregate>;
  _max?: Maybe<ScoreBoulderMaxAggregate>;
  _min?: Maybe<ScoreBoulderMinAggregate>;
  _sum?: Maybe<ScoreBoulderSumAggregate>;
};

export type AggregateScoreLead = {
  __typename?: 'AggregateScoreLead';
  _avg?: Maybe<ScoreLeadAvgAggregate>;
  _count?: Maybe<ScoreLeadCountAggregate>;
  _max?: Maybe<ScoreLeadMaxAggregate>;
  _min?: Maybe<ScoreLeadMinAggregate>;
  _sum?: Maybe<ScoreLeadSumAggregate>;
};

export type AggregateScoreSpeed = {
  __typename?: 'AggregateScoreSpeed';
  _avg?: Maybe<ScoreSpeedAvgAggregate>;
  _count?: Maybe<ScoreSpeedCountAggregate>;
  _max?: Maybe<ScoreSpeedMaxAggregate>;
  _min?: Maybe<ScoreSpeedMinAggregate>;
  _sum?: Maybe<ScoreSpeedSumAggregate>;
};

export type AggregateSeason = {
  __typename?: 'AggregateSeason';
  _avg?: Maybe<SeasonAvgAggregate>;
  _count?: Maybe<SeasonCountAggregate>;
  _max?: Maybe<SeasonMaxAggregate>;
  _min?: Maybe<SeasonMinAggregate>;
  _sum?: Maybe<SeasonSumAggregate>;
};

export type AggregateStartList = {
  __typename?: 'AggregateStartList';
  _avg?: Maybe<StartListAvgAggregate>;
  _count?: Maybe<StartListCountAggregate>;
  _max?: Maybe<StartListMaxAggregate>;
  _min?: Maybe<StartListMinAggregate>;
  _sum?: Maybe<StartListSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type Category = {
  __typename?: 'Category';
  CategoryRound: Array<CategoryRound>;
  ageFrom: Scalars['Int'];
  ageTo: Scalars['Int'];
  competitors: Array<Competitor>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  routes: Array<Route>;
};

export type CategoryCategoryRoundArgs = {
  cursor?: Maybe<CategoryRoundWhereUniqueInput>;
  distinct?: Maybe<Array<CategoryRoundScalarFieldEnum>>;
  orderBy?: Maybe<Array<CategoryRoundOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryRoundWhereInput>;
};

export type CategoryCompetitorsArgs = {
  cursor?: Maybe<CompetitorWhereUniqueInput>;
  distinct?: Maybe<Array<CompetitorScalarFieldEnum>>;
  orderBy?: Maybe<Array<CompetitorOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitorWhereInput>;
};

export type CategoryRoutesArgs = {
  cursor?: Maybe<RouteWhereUniqueInput>;
  distinct?: Maybe<Array<RouteScalarFieldEnum>>;
  orderBy?: Maybe<Array<RouteOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RouteWhereInput>;
};

export type CategoryAvgAggregate = {
  __typename?: 'CategoryAvgAggregate';
  ageFrom?: Maybe<Scalars['Float']>;
  ageTo?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type CategoryAvgOrderByAggregateInput = {
  ageFrom?: Maybe<SortOrder>;
  ageTo?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int'];
  ageFrom: Scalars['Int'];
  ageTo: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type CategoryCountOrderByAggregateInput = {
  ageFrom?: Maybe<SortOrder>;
  ageTo?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CategoryCreateInput = {
  CategoryRound?: Maybe<CategoryRoundCreateNestedManyWithoutCategoryInput>;
  ageFrom: Scalars['Int'];
  ageTo: Scalars['Int'];
  competitors?: Maybe<CompetitorCreateNestedManyWithoutCategoryInput>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  routes?: Maybe<RouteCreateNestedManyWithoutCategoryInput>;
};

export type CategoryCreateManyInput = {
  ageFrom: Scalars['Int'];
  ageTo: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type CategoryCreateNestedOneWithoutCategoryRoundInput = {
  connect?: Maybe<CategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutCategoryRoundInput>;
  create?: Maybe<CategoryCreateWithoutCategoryRoundInput>;
};

export type CategoryCreateNestedOneWithoutCompetitorsInput = {
  connect?: Maybe<CategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutCompetitorsInput>;
  create?: Maybe<CategoryCreateWithoutCompetitorsInput>;
};

export type CategoryCreateNestedOneWithoutRoutesInput = {
  connect?: Maybe<CategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutRoutesInput>;
  create?: Maybe<CategoryCreateWithoutRoutesInput>;
};

export type CategoryCreateOrConnectWithoutCategoryRoundInput = {
  create: CategoryCreateWithoutCategoryRoundInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutCompetitorsInput = {
  create: CategoryCreateWithoutCompetitorsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutRoutesInput = {
  create: CategoryCreateWithoutRoutesInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutCategoryRoundInput = {
  ageFrom: Scalars['Int'];
  ageTo: Scalars['Int'];
  competitors?: Maybe<CompetitorCreateNestedManyWithoutCategoryInput>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  routes?: Maybe<RouteCreateNestedManyWithoutCategoryInput>;
};

export type CategoryCreateWithoutCompetitorsInput = {
  CategoryRound?: Maybe<CategoryRoundCreateNestedManyWithoutCategoryInput>;
  ageFrom: Scalars['Int'];
  ageTo: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  routes?: Maybe<RouteCreateNestedManyWithoutCategoryInput>;
};

export type CategoryCreateWithoutRoutesInput = {
  CategoryRound?: Maybe<CategoryRoundCreateNestedManyWithoutCategoryInput>;
  ageFrom: Scalars['Int'];
  ageTo: Scalars['Int'];
  competitors?: Maybe<CompetitorCreateNestedManyWithoutCategoryInput>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  _avg?: Maybe<CategoryAvgAggregate>;
  _count?: Maybe<CategoryCountAggregate>;
  _max?: Maybe<CategoryMaxAggregate>;
  _min?: Maybe<CategoryMinAggregate>;
  _sum?: Maybe<CategorySumAggregate>;
  ageFrom: Scalars['Int'];
  ageTo: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  ageFrom?: Maybe<Scalars['Int']>;
  ageTo?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CategoryMaxOrderByAggregateInput = {
  ageFrom?: Maybe<SortOrder>;
  ageTo?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  ageFrom?: Maybe<Scalars['Int']>;
  ageTo?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CategoryMinOrderByAggregateInput = {
  ageFrom?: Maybe<SortOrder>;
  ageTo?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CategoryOrderByInput = {
  ageFrom?: Maybe<SortOrder>;
  ageTo?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CategoryOrderByWithAggregationInput = {
  _avg?: Maybe<CategoryAvgOrderByAggregateInput>;
  _count?: Maybe<CategoryCountOrderByAggregateInput>;
  _max?: Maybe<CategoryMaxOrderByAggregateInput>;
  _min?: Maybe<CategoryMinOrderByAggregateInput>;
  _sum?: Maybe<CategorySumOrderByAggregateInput>;
  ageFrom?: Maybe<SortOrder>;
  ageTo?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CategoryRelationFilter = {
  is?: Maybe<CategoryWhereInput>;
  isNot?: Maybe<CategoryWhereInput>;
};

export type CategoryRound = {
  __typename?: 'CategoryRound';
  category: Category;
  categoryId: Scalars['Int'];
  competition: Competition;
  competitionId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  id: Scalars['Int'];
  round: Round;
  startDate: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type CategoryRoundAvgAggregate = {
  __typename?: 'CategoryRoundAvgAggregate';
  categoryId?: Maybe<Scalars['Float']>;
  competitionId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type CategoryRoundAvgOrderByAggregateInput = {
  categoryId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type CategoryRoundCountAggregate = {
  __typename?: 'CategoryRoundCountAggregate';
  _all: Scalars['Int'];
  categoryId: Scalars['Int'];
  competitionId: Scalars['Int'];
  createdAt: Scalars['Int'];
  endDate: Scalars['Int'];
  id: Scalars['Int'];
  round: Scalars['Int'];
  startDate: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CategoryRoundCountOrderByAggregateInput = {
  categoryId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  round?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CategoryRoundCreateInput = {
  category: CategoryCreateNestedOneWithoutCategoryRoundInput;
  competition: CompetitionCreateNestedOneWithoutCategoryRoundsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  endDate: Scalars['DateTime'];
  round: Round;
  startDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryRoundCreateManyCategoryInput = {
  competitionId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  endDate: Scalars['DateTime'];
  id?: Maybe<Scalars['Int']>;
  round: Round;
  startDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryRoundCreateManyCategoryInputEnvelope = {
  data: Array<CategoryRoundCreateManyCategoryInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CategoryRoundCreateManyCompetitionInput = {
  categoryId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  endDate: Scalars['DateTime'];
  id?: Maybe<Scalars['Int']>;
  round: Round;
  startDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryRoundCreateManyCompetitionInputEnvelope = {
  data: Array<CategoryRoundCreateManyCompetitionInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CategoryRoundCreateManyInput = {
  categoryId: Scalars['Int'];
  competitionId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  endDate: Scalars['DateTime'];
  id?: Maybe<Scalars['Int']>;
  round: Round;
  startDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryRoundCreateNestedManyWithoutCategoryInput = {
  connect?: Maybe<Array<CategoryRoundWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CategoryRoundCreateOrConnectWithoutCategoryInput>
  >;
  create?: Maybe<Array<CategoryRoundCreateWithoutCategoryInput>>;
  createMany?: Maybe<CategoryRoundCreateManyCategoryInputEnvelope>;
};

export type CategoryRoundCreateNestedManyWithoutCompetitionInput = {
  connect?: Maybe<Array<CategoryRoundWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CategoryRoundCreateOrConnectWithoutCompetitionInput>
  >;
  create?: Maybe<Array<CategoryRoundCreateWithoutCompetitionInput>>;
  createMany?: Maybe<CategoryRoundCreateManyCompetitionInputEnvelope>;
};

export type CategoryRoundCreateOrConnectWithoutCategoryInput = {
  create: CategoryRoundCreateWithoutCategoryInput;
  where: CategoryRoundWhereUniqueInput;
};

export type CategoryRoundCreateOrConnectWithoutCompetitionInput = {
  create: CategoryRoundCreateWithoutCompetitionInput;
  where: CategoryRoundWhereUniqueInput;
};

export type CategoryRoundCreateWithoutCategoryInput = {
  competition: CompetitionCreateNestedOneWithoutCategoryRoundsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  endDate: Scalars['DateTime'];
  round: Round;
  startDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryRoundCreateWithoutCompetitionInput = {
  category: CategoryCreateNestedOneWithoutCategoryRoundInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  endDate: Scalars['DateTime'];
  round: Round;
  startDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryRoundGroupBy = {
  __typename?: 'CategoryRoundGroupBy';
  _avg?: Maybe<CategoryRoundAvgAggregate>;
  _count?: Maybe<CategoryRoundCountAggregate>;
  _max?: Maybe<CategoryRoundMaxAggregate>;
  _min?: Maybe<CategoryRoundMinAggregate>;
  _sum?: Maybe<CategoryRoundSumAggregate>;
  categoryId: Scalars['Int'];
  competitionId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  id: Scalars['Int'];
  round: Round;
  startDate: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type CategoryRoundListRelationFilter = {
  every?: Maybe<CategoryRoundWhereInput>;
  none?: Maybe<CategoryRoundWhereInput>;
  some?: Maybe<CategoryRoundWhereInput>;
};

export type CategoryRoundMaxAggregate = {
  __typename?: 'CategoryRoundMaxAggregate';
  categoryId?: Maybe<Scalars['Int']>;
  competitionId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Round>;
  startDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryRoundMaxOrderByAggregateInput = {
  categoryId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  round?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CategoryRoundMinAggregate = {
  __typename?: 'CategoryRoundMinAggregate';
  categoryId?: Maybe<Scalars['Int']>;
  competitionId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Round>;
  startDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryRoundMinOrderByAggregateInput = {
  categoryId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  round?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CategoryRoundOrderByInput = {
  categoryId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  round?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CategoryRoundOrderByWithAggregationInput = {
  _avg?: Maybe<CategoryRoundAvgOrderByAggregateInput>;
  _count?: Maybe<CategoryRoundCountOrderByAggregateInput>;
  _max?: Maybe<CategoryRoundMaxOrderByAggregateInput>;
  _min?: Maybe<CategoryRoundMinOrderByAggregateInput>;
  _sum?: Maybe<CategoryRoundSumOrderByAggregateInput>;
  categoryId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  round?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum CategoryRoundScalarFieldEnum {
  CategoryId = 'categoryId',
  CompetitionId = 'competitionId',
  CreatedAt = 'createdAt',
  EndDate = 'endDate',
  Id = 'id',
  Round = 'round',
  StartDate = 'startDate',
  UpdatedAt = 'updatedAt',
}

export type CategoryRoundScalarWhereInput = {
  AND?: Maybe<Array<CategoryRoundScalarWhereInput>>;
  NOT?: Maybe<Array<CategoryRoundScalarWhereInput>>;
  OR?: Maybe<Array<CategoryRoundScalarWhereInput>>;
  categoryId?: Maybe<IntFilter>;
  competitionId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  endDate?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  round?: Maybe<EnumRoundFilter>;
  startDate?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CategoryRoundScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CategoryRoundScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CategoryRoundScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CategoryRoundScalarWhereWithAggregatesInput>>;
  categoryId?: Maybe<IntWithAggregatesFilter>;
  competitionId?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  endDate?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  round?: Maybe<EnumRoundWithAggregatesFilter>;
  startDate?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type CategoryRoundSumAggregate = {
  __typename?: 'CategoryRoundSumAggregate';
  categoryId?: Maybe<Scalars['Int']>;
  competitionId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type CategoryRoundSumOrderByAggregateInput = {
  categoryId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type CategoryRoundUpdateInput = {
  category?: Maybe<CategoryUpdateOneRequiredWithoutCategoryRoundInput>;
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutCategoryRoundsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  round?: Maybe<EnumRoundFieldUpdateOperationsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryRoundUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  round?: Maybe<EnumRoundFieldUpdateOperationsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryRoundUpdateManyWithWhereWithoutCategoryInput = {
  data: CategoryRoundUpdateManyMutationInput;
  where: CategoryRoundScalarWhereInput;
};

export type CategoryRoundUpdateManyWithWhereWithoutCompetitionInput = {
  data: CategoryRoundUpdateManyMutationInput;
  where: CategoryRoundScalarWhereInput;
};

export type CategoryRoundUpdateManyWithoutCategoryInput = {
  connect?: Maybe<Array<CategoryRoundWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CategoryRoundCreateOrConnectWithoutCategoryInput>
  >;
  create?: Maybe<Array<CategoryRoundCreateWithoutCategoryInput>>;
  createMany?: Maybe<CategoryRoundCreateManyCategoryInputEnvelope>;
  delete?: Maybe<Array<CategoryRoundWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CategoryRoundScalarWhereInput>>;
  disconnect?: Maybe<Array<CategoryRoundWhereUniqueInput>>;
  set?: Maybe<Array<CategoryRoundWhereUniqueInput>>;
  update?: Maybe<Array<CategoryRoundUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: Maybe<
    Array<CategoryRoundUpdateManyWithWhereWithoutCategoryInput>
  >;
  upsert?: Maybe<Array<CategoryRoundUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type CategoryRoundUpdateManyWithoutCompetitionInput = {
  connect?: Maybe<Array<CategoryRoundWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CategoryRoundCreateOrConnectWithoutCompetitionInput>
  >;
  create?: Maybe<Array<CategoryRoundCreateWithoutCompetitionInput>>;
  createMany?: Maybe<CategoryRoundCreateManyCompetitionInputEnvelope>;
  delete?: Maybe<Array<CategoryRoundWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CategoryRoundScalarWhereInput>>;
  disconnect?: Maybe<Array<CategoryRoundWhereUniqueInput>>;
  set?: Maybe<Array<CategoryRoundWhereUniqueInput>>;
  update?: Maybe<
    Array<CategoryRoundUpdateWithWhereUniqueWithoutCompetitionInput>
  >;
  updateMany?: Maybe<
    Array<CategoryRoundUpdateManyWithWhereWithoutCompetitionInput>
  >;
  upsert?: Maybe<
    Array<CategoryRoundUpsertWithWhereUniqueWithoutCompetitionInput>
  >;
};

export type CategoryRoundUpdateWithWhereUniqueWithoutCategoryInput = {
  data: CategoryRoundUpdateWithoutCategoryInput;
  where: CategoryRoundWhereUniqueInput;
};

export type CategoryRoundUpdateWithWhereUniqueWithoutCompetitionInput = {
  data: CategoryRoundUpdateWithoutCompetitionInput;
  where: CategoryRoundWhereUniqueInput;
};

export type CategoryRoundUpdateWithoutCategoryInput = {
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutCategoryRoundsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  round?: Maybe<EnumRoundFieldUpdateOperationsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryRoundUpdateWithoutCompetitionInput = {
  category?: Maybe<CategoryUpdateOneRequiredWithoutCategoryRoundInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  round?: Maybe<EnumRoundFieldUpdateOperationsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryRoundUpsertWithWhereUniqueWithoutCategoryInput = {
  create: CategoryRoundCreateWithoutCategoryInput;
  update: CategoryRoundUpdateWithoutCategoryInput;
  where: CategoryRoundWhereUniqueInput;
};

export type CategoryRoundUpsertWithWhereUniqueWithoutCompetitionInput = {
  create: CategoryRoundCreateWithoutCompetitionInput;
  update: CategoryRoundUpdateWithoutCompetitionInput;
  where: CategoryRoundWhereUniqueInput;
};

export type CategoryRoundWhereInput = {
  AND?: Maybe<Array<CategoryRoundWhereInput>>;
  NOT?: Maybe<Array<CategoryRoundWhereInput>>;
  OR?: Maybe<Array<CategoryRoundWhereInput>>;
  category?: Maybe<CategoryRelationFilter>;
  categoryId?: Maybe<IntFilter>;
  competition?: Maybe<CompetitionRelationFilter>;
  competitionId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  endDate?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  round?: Maybe<EnumRoundFilter>;
  startDate?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CategoryRoundWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum CategoryScalarFieldEnum {
  AgeFrom = 'ageFrom',
  AgeTo = 'ageTo',
  Description = 'description',
  Id = 'id',
  Name = 'name',
}

export type CategoryScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  ageFrom?: Maybe<IntWithAggregatesFilter>;
  ageTo?: Maybe<IntWithAggregatesFilter>;
  description?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
};

export type CategorySumAggregate = {
  __typename?: 'CategorySumAggregate';
  ageFrom?: Maybe<Scalars['Int']>;
  ageTo?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type CategorySumOrderByAggregateInput = {
  ageFrom?: Maybe<SortOrder>;
  ageTo?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type CategoryUpdateInput = {
  CategoryRound?: Maybe<CategoryRoundUpdateManyWithoutCategoryInput>;
  ageFrom?: Maybe<IntFieldUpdateOperationsInput>;
  ageTo?: Maybe<IntFieldUpdateOperationsInput>;
  competitors?: Maybe<CompetitorUpdateManyWithoutCategoryInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  routes?: Maybe<RouteUpdateManyWithoutCategoryInput>;
};

export type CategoryUpdateManyMutationInput = {
  ageFrom?: Maybe<IntFieldUpdateOperationsInput>;
  ageTo?: Maybe<IntFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateOneRequiredWithoutCategoryRoundInput = {
  connect?: Maybe<CategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutCategoryRoundInput>;
  create?: Maybe<CategoryCreateWithoutCategoryRoundInput>;
  update?: Maybe<CategoryUpdateWithoutCategoryRoundInput>;
  upsert?: Maybe<CategoryUpsertWithoutCategoryRoundInput>;
};

export type CategoryUpdateOneRequiredWithoutCompetitorsInput = {
  connect?: Maybe<CategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutCompetitorsInput>;
  create?: Maybe<CategoryCreateWithoutCompetitorsInput>;
  update?: Maybe<CategoryUpdateWithoutCompetitorsInput>;
  upsert?: Maybe<CategoryUpsertWithoutCompetitorsInput>;
};

export type CategoryUpdateOneRequiredWithoutRoutesInput = {
  connect?: Maybe<CategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutRoutesInput>;
  create?: Maybe<CategoryCreateWithoutRoutesInput>;
  update?: Maybe<CategoryUpdateWithoutRoutesInput>;
  upsert?: Maybe<CategoryUpsertWithoutRoutesInput>;
};

export type CategoryUpdateWithoutCategoryRoundInput = {
  ageFrom?: Maybe<IntFieldUpdateOperationsInput>;
  ageTo?: Maybe<IntFieldUpdateOperationsInput>;
  competitors?: Maybe<CompetitorUpdateManyWithoutCategoryInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  routes?: Maybe<RouteUpdateManyWithoutCategoryInput>;
};

export type CategoryUpdateWithoutCompetitorsInput = {
  CategoryRound?: Maybe<CategoryRoundUpdateManyWithoutCategoryInput>;
  ageFrom?: Maybe<IntFieldUpdateOperationsInput>;
  ageTo?: Maybe<IntFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  routes?: Maybe<RouteUpdateManyWithoutCategoryInput>;
};

export type CategoryUpdateWithoutRoutesInput = {
  CategoryRound?: Maybe<CategoryRoundUpdateManyWithoutCategoryInput>;
  ageFrom?: Maybe<IntFieldUpdateOperationsInput>;
  ageTo?: Maybe<IntFieldUpdateOperationsInput>;
  competitors?: Maybe<CompetitorUpdateManyWithoutCategoryInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithoutCategoryRoundInput = {
  create: CategoryCreateWithoutCategoryRoundInput;
  update: CategoryUpdateWithoutCategoryRoundInput;
};

export type CategoryUpsertWithoutCompetitorsInput = {
  create: CategoryCreateWithoutCompetitorsInput;
  update: CategoryUpdateWithoutCompetitorsInput;
};

export type CategoryUpsertWithoutRoutesInput = {
  create: CategoryCreateWithoutRoutesInput;
  update: CategoryUpdateWithoutRoutesInput;
};

export type CategoryWhereInput = {
  AND?: Maybe<Array<CategoryWhereInput>>;
  CategoryRound?: Maybe<CategoryRoundListRelationFilter>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  ageFrom?: Maybe<IntFilter>;
  ageTo?: Maybe<IntFilter>;
  competitors?: Maybe<CompetitorListRelationFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  routes?: Maybe<RouteListRelationFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Club = {
  __typename?: 'Club';
  address?: Maybe<Scalars['String']>;
  competitions: Array<Competition>;
  competitors: Array<Competitor>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  location: Location;
  locationId: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ClubCompetitionsArgs = {
  cursor?: Maybe<CompetitionWhereUniqueInput>;
  distinct?: Maybe<Array<CompetitionScalarFieldEnum>>;
  orderBy?: Maybe<Array<CompetitionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitionWhereInput>;
};

export type ClubCompetitorsArgs = {
  cursor?: Maybe<CompetitorWhereUniqueInput>;
  distinct?: Maybe<Array<CompetitorScalarFieldEnum>>;
  orderBy?: Maybe<Array<CompetitorOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitorWhereInput>;
};

export type ClubAvgAggregate = {
  __typename?: 'ClubAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
};

export type ClubAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
};

export type ClubCountAggregate = {
  __typename?: 'ClubCountAggregate';
  _all: Scalars['Int'];
  address: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  locationId: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ClubCountOrderByAggregateInput = {
  address?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ClubCreateInput = {
  address?: Maybe<Scalars['String']>;
  competitions?: Maybe<CompetitionCreateNestedManyWithoutClubInput>;
  competitors?: Maybe<CompetitorCreateNestedManyWithoutClubInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  location: LocationCreateNestedOneWithoutClubsInput;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubCreateManyInput = {
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  locationId: Scalars['Int'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubCreateManyLocationInput = {
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubCreateManyLocationInputEnvelope = {
  data: Array<ClubCreateManyLocationInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ClubCreateNestedManyWithoutLocationInput = {
  connect?: Maybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ClubCreateOrConnectWithoutLocationInput>>;
  create?: Maybe<Array<ClubCreateWithoutLocationInput>>;
  createMany?: Maybe<ClubCreateManyLocationInputEnvelope>;
};

export type ClubCreateNestedOneWithoutCompetitionsInput = {
  connect?: Maybe<ClubWhereUniqueInput>;
  connectOrCreate?: Maybe<ClubCreateOrConnectWithoutCompetitionsInput>;
  create?: Maybe<ClubCreateWithoutCompetitionsInput>;
};

export type ClubCreateNestedOneWithoutCompetitorsInput = {
  connect?: Maybe<ClubWhereUniqueInput>;
  connectOrCreate?: Maybe<ClubCreateOrConnectWithoutCompetitorsInput>;
  create?: Maybe<ClubCreateWithoutCompetitorsInput>;
};

export type ClubCreateOrConnectWithoutCompetitionsInput = {
  create: ClubCreateWithoutCompetitionsInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutCompetitorsInput = {
  create: ClubCreateWithoutCompetitorsInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutLocationInput = {
  create: ClubCreateWithoutLocationInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateWithoutCompetitionsInput = {
  address?: Maybe<Scalars['String']>;
  competitors?: Maybe<CompetitorCreateNestedManyWithoutClubInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  location: LocationCreateNestedOneWithoutClubsInput;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutCompetitorsInput = {
  address?: Maybe<Scalars['String']>;
  competitions?: Maybe<CompetitionCreateNestedManyWithoutClubInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  location: LocationCreateNestedOneWithoutClubsInput;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutLocationInput = {
  address?: Maybe<Scalars['String']>;
  competitions?: Maybe<CompetitionCreateNestedManyWithoutClubInput>;
  competitors?: Maybe<CompetitorCreateNestedManyWithoutClubInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubGroupBy = {
  __typename?: 'ClubGroupBy';
  _avg?: Maybe<ClubAvgAggregate>;
  _count?: Maybe<ClubCountAggregate>;
  _max?: Maybe<ClubMaxAggregate>;
  _min?: Maybe<ClubMinAggregate>;
  _sum?: Maybe<ClubSumAggregate>;
  address?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  locationId: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ClubListRelationFilter = {
  every?: Maybe<ClubWhereInput>;
  none?: Maybe<ClubWhereInput>;
  some?: Maybe<ClubWhereInput>;
};

export type ClubMaxAggregate = {
  __typename?: 'ClubMaxAggregate';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubMaxOrderByAggregateInput = {
  address?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ClubMinAggregate = {
  __typename?: 'ClubMinAggregate';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubMinOrderByAggregateInput = {
  address?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ClubOrderByInput = {
  address?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ClubOrderByWithAggregationInput = {
  _avg?: Maybe<ClubAvgOrderByAggregateInput>;
  _count?: Maybe<ClubCountOrderByAggregateInput>;
  _max?: Maybe<ClubMaxOrderByAggregateInput>;
  _min?: Maybe<ClubMinOrderByAggregateInput>;
  _sum?: Maybe<ClubSumOrderByAggregateInput>;
  address?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ClubRelationFilter = {
  is?: Maybe<ClubWhereInput>;
  isNot?: Maybe<ClubWhereInput>;
};

export enum ClubScalarFieldEnum {
  Address = 'address',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  LocationId = 'locationId',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type ClubScalarWhereInput = {
  AND?: Maybe<Array<ClubScalarWhereInput>>;
  NOT?: Maybe<Array<ClubScalarWhereInput>>;
  OR?: Maybe<Array<ClubScalarWhereInput>>;
  address?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  locationId?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ClubScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ClubScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ClubScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ClubScalarWhereWithAggregatesInput>>;
  address?: Maybe<StringNullableWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  description?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  locationId?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type ClubSumAggregate = {
  __typename?: 'ClubSumAggregate';
  id?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
};

export type ClubSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
};

export type ClubUpdateInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  competitions?: Maybe<CompetitionUpdateManyWithoutClubInput>;
  competitors?: Maybe<CompetitorUpdateManyWithoutClubInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutClubsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateManyMutationInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateManyWithWhereWithoutLocationInput = {
  data: ClubUpdateManyMutationInput;
  where: ClubScalarWhereInput;
};

export type ClubUpdateManyWithoutLocationInput = {
  connect?: Maybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ClubCreateOrConnectWithoutLocationInput>>;
  create?: Maybe<Array<ClubCreateWithoutLocationInput>>;
  createMany?: Maybe<ClubCreateManyLocationInputEnvelope>;
  delete?: Maybe<Array<ClubWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ClubScalarWhereInput>>;
  disconnect?: Maybe<Array<ClubWhereUniqueInput>>;
  set?: Maybe<Array<ClubWhereUniqueInput>>;
  update?: Maybe<Array<ClubUpdateWithWhereUniqueWithoutLocationInput>>;
  updateMany?: Maybe<Array<ClubUpdateManyWithWhereWithoutLocationInput>>;
  upsert?: Maybe<Array<ClubUpsertWithWhereUniqueWithoutLocationInput>>;
};

export type ClubUpdateOneRequiredWithoutCompetitionsInput = {
  connect?: Maybe<ClubWhereUniqueInput>;
  connectOrCreate?: Maybe<ClubCreateOrConnectWithoutCompetitionsInput>;
  create?: Maybe<ClubCreateWithoutCompetitionsInput>;
  update?: Maybe<ClubUpdateWithoutCompetitionsInput>;
  upsert?: Maybe<ClubUpsertWithoutCompetitionsInput>;
};

export type ClubUpdateOneRequiredWithoutCompetitorsInput = {
  connect?: Maybe<ClubWhereUniqueInput>;
  connectOrCreate?: Maybe<ClubCreateOrConnectWithoutCompetitorsInput>;
  create?: Maybe<ClubCreateWithoutCompetitorsInput>;
  update?: Maybe<ClubUpdateWithoutCompetitorsInput>;
  upsert?: Maybe<ClubUpsertWithoutCompetitorsInput>;
};

export type ClubUpdateWithWhereUniqueWithoutLocationInput = {
  data: ClubUpdateWithoutLocationInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpdateWithoutCompetitionsInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  competitors?: Maybe<CompetitorUpdateManyWithoutClubInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutClubsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutCompetitorsInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  competitions?: Maybe<CompetitionUpdateManyWithoutClubInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutClubsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutLocationInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  competitions?: Maybe<CompetitionUpdateManyWithoutClubInput>;
  competitors?: Maybe<CompetitorUpdateManyWithoutClubInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpsertWithWhereUniqueWithoutLocationInput = {
  create: ClubCreateWithoutLocationInput;
  update: ClubUpdateWithoutLocationInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpsertWithoutCompetitionsInput = {
  create: ClubCreateWithoutCompetitionsInput;
  update: ClubUpdateWithoutCompetitionsInput;
};

export type ClubUpsertWithoutCompetitorsInput = {
  create: ClubCreateWithoutCompetitorsInput;
  update: ClubUpdateWithoutCompetitorsInput;
};

export type ClubWhereInput = {
  AND?: Maybe<Array<ClubWhereInput>>;
  NOT?: Maybe<Array<ClubWhereInput>>;
  OR?: Maybe<Array<ClubWhereInput>>;
  address?: Maybe<StringNullableFilter>;
  competitions?: Maybe<CompetitionListRelationFilter>;
  competitors?: Maybe<CompetitorListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  location?: Maybe<LocationRelationFilter>;
  locationId?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ClubWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  scoresBoulder: Array<ScoreBoulder>;
  scoresLead: Array<ScoreLead>;
  scoresSpeed: Array<ScoreSpeed>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type CommentScoresBoulderArgs = {
  cursor?: Maybe<ScoreBoulderWhereUniqueInput>;
  distinct?: Maybe<Array<ScoreBoulderScalarFieldEnum>>;
  orderBy?: Maybe<Array<ScoreBoulderOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreBoulderWhereInput>;
};

export type CommentScoresLeadArgs = {
  cursor?: Maybe<ScoreLeadWhereUniqueInput>;
  distinct?: Maybe<Array<ScoreLeadScalarFieldEnum>>;
  orderBy?: Maybe<Array<ScoreLeadOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreLeadWhereInput>;
};

export type CommentScoresSpeedArgs = {
  cursor?: Maybe<ScoreSpeedWhereUniqueInput>;
  distinct?: Maybe<Array<ScoreSpeedScalarFieldEnum>>;
  orderBy?: Maybe<Array<ScoreSpeedOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreSpeedWhereInput>;
};

export type CommentAvgAggregate = {
  __typename?: 'CommentAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type CommentAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type CommentCountAggregate = {
  __typename?: 'CommentCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CommentCountOrderByAggregateInput = {
  content?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type CommentCreateInput = {
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  scoresBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutCommentInput>;
  scoresLead?: Maybe<ScoreLeadCreateNestedManyWithoutCommentInput>;
  scoresSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutCommentInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserCreateNestedOneWithoutCommentsInput>;
};

export type CommentCreateManyInput = {
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type CommentCreateManyUserInput = {
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateManyUserInputEnvelope = {
  data: Array<CommentCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: Maybe<CommentCreateManyUserInputEnvelope>;
};

export type CommentCreateNestedOneWithoutScoresBoulderInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutScoresBoulderInput>;
  create?: Maybe<CommentCreateWithoutScoresBoulderInput>;
};

export type CommentCreateNestedOneWithoutScoresLeadInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutScoresLeadInput>;
  create?: Maybe<CommentCreateWithoutScoresLeadInput>;
};

export type CommentCreateNestedOneWithoutScoresSpeedInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutScoresSpeedInput>;
  create?: Maybe<CommentCreateWithoutScoresSpeedInput>;
};

export type CommentCreateOrConnectWithoutScoresBoulderInput = {
  create: CommentCreateWithoutScoresBoulderInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutScoresLeadInput = {
  create: CommentCreateWithoutScoresLeadInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutScoresSpeedInput = {
  create: CommentCreateWithoutScoresSpeedInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutScoresBoulderInput = {
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  scoresLead?: Maybe<ScoreLeadCreateNestedManyWithoutCommentInput>;
  scoresSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutCommentInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserCreateNestedOneWithoutCommentsInput>;
};

export type CommentCreateWithoutScoresLeadInput = {
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  scoresBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutCommentInput>;
  scoresSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutCommentInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserCreateNestedOneWithoutCommentsInput>;
};

export type CommentCreateWithoutScoresSpeedInput = {
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  scoresBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutCommentInput>;
  scoresLead?: Maybe<ScoreLeadCreateNestedManyWithoutCommentInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserCreateNestedOneWithoutCommentsInput>;
};

export type CommentCreateWithoutUserInput = {
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  scoresBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutCommentInput>;
  scoresLead?: Maybe<ScoreLeadCreateNestedManyWithoutCommentInput>;
  scoresSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutCommentInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentGroupBy = {
  __typename?: 'CommentGroupBy';
  _avg?: Maybe<CommentAvgAggregate>;
  _count?: Maybe<CommentCountAggregate>;
  _max?: Maybe<CommentMaxAggregate>;
  _min?: Maybe<CommentMinAggregate>;
  _sum?: Maybe<CommentSumAggregate>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['Int']>;
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
};

export type CommentMaxAggregate = {
  __typename?: 'CommentMaxAggregate';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type CommentMaxOrderByAggregateInput = {
  content?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type CommentMinAggregate = {
  __typename?: 'CommentMinAggregate';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type CommentMinOrderByAggregateInput = {
  content?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type CommentOrderByInput = {
  content?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type CommentOrderByWithAggregationInput = {
  _avg?: Maybe<CommentAvgOrderByAggregateInput>;
  _count?: Maybe<CommentCountOrderByAggregateInput>;
  _max?: Maybe<CommentMaxOrderByAggregateInput>;
  _min?: Maybe<CommentMinOrderByAggregateInput>;
  _sum?: Maybe<CommentSumOrderByAggregateInput>;
  content?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type CommentRelationFilter = {
  is?: Maybe<CommentWhereInput>;
  isNot?: Maybe<CommentWhereInput>;
};

export enum CommentScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<CommentScalarWhereInput>>;
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  content?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<IntNullableFilter>;
};

export type CommentScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CommentScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CommentScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CommentScalarWhereWithAggregatesInput>>;
  content?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  userId?: Maybe<IntNullableWithAggregatesFilter>;
};

export type CommentSumAggregate = {
  __typename?: 'CommentSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type CommentSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type CommentUpdateInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  scoresBoulder?: Maybe<ScoreBoulderUpdateManyWithoutCommentInput>;
  scoresLead?: Maybe<ScoreLeadUpdateManyWithoutCommentInput>;
  scoresSpeed?: Maybe<ScoreSpeedUpdateManyWithoutCommentInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneWithoutCommentsInput>;
};

export type CommentUpdateManyMutationInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutUserInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: Maybe<CommentCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CommentUpdateOneWithoutScoresBoulderInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutScoresBoulderInput>;
  create?: Maybe<CommentCreateWithoutScoresBoulderInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CommentUpdateWithoutScoresBoulderInput>;
  upsert?: Maybe<CommentUpsertWithoutScoresBoulderInput>;
};

export type CommentUpdateOneWithoutScoresLeadInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutScoresLeadInput>;
  create?: Maybe<CommentCreateWithoutScoresLeadInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CommentUpdateWithoutScoresLeadInput>;
  upsert?: Maybe<CommentUpsertWithoutScoresLeadInput>;
};

export type CommentUpdateOneWithoutScoresSpeedInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutScoresSpeedInput>;
  create?: Maybe<CommentCreateWithoutScoresSpeedInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CommentUpdateWithoutScoresSpeedInput>;
  upsert?: Maybe<CommentUpsertWithoutScoresSpeedInput>;
};

export type CommentUpdateWithWhereUniqueWithoutUserInput = {
  data: CommentUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutScoresBoulderInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  scoresLead?: Maybe<ScoreLeadUpdateManyWithoutCommentInput>;
  scoresSpeed?: Maybe<ScoreSpeedUpdateManyWithoutCommentInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneWithoutCommentsInput>;
};

export type CommentUpdateWithoutScoresLeadInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  scoresBoulder?: Maybe<ScoreBoulderUpdateManyWithoutCommentInput>;
  scoresSpeed?: Maybe<ScoreSpeedUpdateManyWithoutCommentInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneWithoutCommentsInput>;
};

export type CommentUpdateWithoutScoresSpeedInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  scoresBoulder?: Maybe<ScoreBoulderUpdateManyWithoutCommentInput>;
  scoresLead?: Maybe<ScoreLeadUpdateManyWithoutCommentInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneWithoutCommentsInput>;
};

export type CommentUpdateWithoutUserInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  scoresBoulder?: Maybe<ScoreBoulderUpdateManyWithoutCommentInput>;
  scoresLead?: Maybe<ScoreLeadUpdateManyWithoutCommentInput>;
  scoresSpeed?: Maybe<ScoreSpeedUpdateManyWithoutCommentInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  update: CommentUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithoutScoresBoulderInput = {
  create: CommentCreateWithoutScoresBoulderInput;
  update: CommentUpdateWithoutScoresBoulderInput;
};

export type CommentUpsertWithoutScoresLeadInput = {
  create: CommentCreateWithoutScoresLeadInput;
  update: CommentUpdateWithoutScoresLeadInput;
};

export type CommentUpsertWithoutScoresSpeedInput = {
  create: CommentCreateWithoutScoresSpeedInput;
  update: CommentUpdateWithoutScoresSpeedInput;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  content?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  scoresBoulder?: Maybe<ScoreBoulderListRelationFilter>;
  scoresLead?: Maybe<ScoreLeadListRelationFilter>;
  scoresSpeed?: Maybe<ScoreSpeedListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<IntNullableFilter>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Competition = {
  __typename?: 'Competition';
  active: Scalars['Boolean'];
  address: Scalars['String'];
  categoryRounds: Array<CategoryRound>;
  club: Club;
  clubId: Scalars['Int'];
  compType: CompetitionType;
  compTypeId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  id: Scalars['Int'];
  location: Location;
  locationId: Scalars['Int'];
  name: Scalars['String'];
  registrations: Array<Registration>;
  results: Array<Result>;
  routes: Array<Route>;
  season: Season;
  seasonId: Scalars['Int'];
  startDate: Scalars['DateTime'];
  startLists: Array<StartList>;
  updatedAt: Scalars['DateTime'];
};

export type CompetitionCategoryRoundsArgs = {
  cursor?: Maybe<CategoryRoundWhereUniqueInput>;
  distinct?: Maybe<Array<CategoryRoundScalarFieldEnum>>;
  orderBy?: Maybe<Array<CategoryRoundOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryRoundWhereInput>;
};

export type CompetitionRegistrationsArgs = {
  cursor?: Maybe<RegistrationWhereUniqueInput>;
  distinct?: Maybe<Array<RegistrationScalarFieldEnum>>;
  orderBy?: Maybe<Array<RegistrationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RegistrationWhereInput>;
};

export type CompetitionResultsArgs = {
  cursor?: Maybe<ResultWhereUniqueInput>;
  distinct?: Maybe<Array<ResultScalarFieldEnum>>;
  orderBy?: Maybe<Array<ResultOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ResultWhereInput>;
};

export type CompetitionRoutesArgs = {
  cursor?: Maybe<RouteWhereUniqueInput>;
  distinct?: Maybe<Array<RouteScalarFieldEnum>>;
  orderBy?: Maybe<Array<RouteOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RouteWhereInput>;
};

export type CompetitionStartListsArgs = {
  cursor?: Maybe<StartListWhereUniqueInput>;
  distinct?: Maybe<Array<StartListScalarFieldEnum>>;
  orderBy?: Maybe<Array<StartListOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StartListWhereInput>;
};

export type CompetitionAvgAggregate = {
  __typename?: 'CompetitionAvgAggregate';
  clubId?: Maybe<Scalars['Float']>;
  compTypeId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
  seasonId?: Maybe<Scalars['Float']>;
};

export type CompetitionAvgOrderByAggregateInput = {
  clubId?: Maybe<SortOrder>;
  compTypeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  seasonId?: Maybe<SortOrder>;
};

export type CompetitionCountAggregate = {
  __typename?: 'CompetitionCountAggregate';
  _all: Scalars['Int'];
  active: Scalars['Int'];
  address: Scalars['Int'];
  clubId: Scalars['Int'];
  compTypeId: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  endDate: Scalars['Int'];
  id: Scalars['Int'];
  locationId: Scalars['Int'];
  name: Scalars['Int'];
  seasonId: Scalars['Int'];
  startDate: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CompetitionCountOrderByAggregateInput = {
  active?: Maybe<SortOrder>;
  address?: Maybe<SortOrder>;
  clubId?: Maybe<SortOrder>;
  compTypeId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seasonId?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CompetitionCreateInput = {
  active?: Maybe<Scalars['Boolean']>;
  address: Scalars['String'];
  categoryRounds?: Maybe<CategoryRoundCreateNestedManyWithoutCompetitionInput>;
  club: ClubCreateNestedOneWithoutCompetitionsInput;
  compType: CompetitionTypeCreateNestedOneWithoutCompetitionsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  location: LocationCreateNestedOneWithoutCompetitionsInput;
  name: Scalars['String'];
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitionInput>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitionInput>;
  routes?: Maybe<RouteCreateNestedManyWithoutCompetitionInput>;
  season: SeasonCreateNestedOneWithoutCompetitionsInput;
  startDate: Scalars['DateTime'];
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitionInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionCreateManyClubInput = {
  active?: Maybe<Scalars['Boolean']>;
  address: Scalars['String'];
  compTypeId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  id?: Maybe<Scalars['Int']>;
  locationId: Scalars['Int'];
  name: Scalars['String'];
  seasonId: Scalars['Int'];
  startDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionCreateManyClubInputEnvelope = {
  data: Array<CompetitionCreateManyClubInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CompetitionCreateManyCompTypeInput = {
  active?: Maybe<Scalars['Boolean']>;
  address: Scalars['String'];
  clubId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  id?: Maybe<Scalars['Int']>;
  locationId: Scalars['Int'];
  name: Scalars['String'];
  seasonId: Scalars['Int'];
  startDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionCreateManyCompTypeInputEnvelope = {
  data: Array<CompetitionCreateManyCompTypeInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CompetitionCreateManyInput = {
  active?: Maybe<Scalars['Boolean']>;
  address: Scalars['String'];
  clubId: Scalars['Int'];
  compTypeId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  id?: Maybe<Scalars['Int']>;
  locationId: Scalars['Int'];
  name: Scalars['String'];
  seasonId: Scalars['Int'];
  startDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionCreateManyLocationInput = {
  active?: Maybe<Scalars['Boolean']>;
  address: Scalars['String'];
  clubId: Scalars['Int'];
  compTypeId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  seasonId: Scalars['Int'];
  startDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionCreateManyLocationInputEnvelope = {
  data: Array<CompetitionCreateManyLocationInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CompetitionCreateManySeasonInput = {
  active?: Maybe<Scalars['Boolean']>;
  address: Scalars['String'];
  clubId: Scalars['Int'];
  compTypeId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  id?: Maybe<Scalars['Int']>;
  locationId: Scalars['Int'];
  name: Scalars['String'];
  startDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionCreateManySeasonInputEnvelope = {
  data: Array<CompetitionCreateManySeasonInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CompetitionCreateNestedManyWithoutClubInput = {
  connect?: Maybe<Array<CompetitionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CompetitionCreateOrConnectWithoutClubInput>>;
  create?: Maybe<Array<CompetitionCreateWithoutClubInput>>;
  createMany?: Maybe<CompetitionCreateManyClubInputEnvelope>;
};

export type CompetitionCreateNestedManyWithoutCompTypeInput = {
  connect?: Maybe<Array<CompetitionWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CompetitionCreateOrConnectWithoutCompTypeInput>
  >;
  create?: Maybe<Array<CompetitionCreateWithoutCompTypeInput>>;
  createMany?: Maybe<CompetitionCreateManyCompTypeInputEnvelope>;
};

export type CompetitionCreateNestedManyWithoutLocationInput = {
  connect?: Maybe<Array<CompetitionWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CompetitionCreateOrConnectWithoutLocationInput>
  >;
  create?: Maybe<Array<CompetitionCreateWithoutLocationInput>>;
  createMany?: Maybe<CompetitionCreateManyLocationInputEnvelope>;
};

export type CompetitionCreateNestedManyWithoutSeasonInput = {
  connect?: Maybe<Array<CompetitionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CompetitionCreateOrConnectWithoutSeasonInput>>;
  create?: Maybe<Array<CompetitionCreateWithoutSeasonInput>>;
  createMany?: Maybe<CompetitionCreateManySeasonInputEnvelope>;
};

export type CompetitionCreateNestedOneWithoutCategoryRoundsInput = {
  connect?: Maybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitionCreateOrConnectWithoutCategoryRoundsInput>;
  create?: Maybe<CompetitionCreateWithoutCategoryRoundsInput>;
};

export type CompetitionCreateNestedOneWithoutRegistrationsInput = {
  connect?: Maybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitionCreateOrConnectWithoutRegistrationsInput>;
  create?: Maybe<CompetitionCreateWithoutRegistrationsInput>;
};

export type CompetitionCreateNestedOneWithoutResultsInput = {
  connect?: Maybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitionCreateOrConnectWithoutResultsInput>;
  create?: Maybe<CompetitionCreateWithoutResultsInput>;
};

export type CompetitionCreateNestedOneWithoutRoutesInput = {
  connect?: Maybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitionCreateOrConnectWithoutRoutesInput>;
  create?: Maybe<CompetitionCreateWithoutRoutesInput>;
};

export type CompetitionCreateNestedOneWithoutStartListsInput = {
  connect?: Maybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitionCreateOrConnectWithoutStartListsInput>;
  create?: Maybe<CompetitionCreateWithoutStartListsInput>;
};

export type CompetitionCreateOrConnectWithoutCategoryRoundsInput = {
  create: CompetitionCreateWithoutCategoryRoundsInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionCreateOrConnectWithoutClubInput = {
  create: CompetitionCreateWithoutClubInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionCreateOrConnectWithoutCompTypeInput = {
  create: CompetitionCreateWithoutCompTypeInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionCreateOrConnectWithoutLocationInput = {
  create: CompetitionCreateWithoutLocationInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionCreateOrConnectWithoutRegistrationsInput = {
  create: CompetitionCreateWithoutRegistrationsInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionCreateOrConnectWithoutResultsInput = {
  create: CompetitionCreateWithoutResultsInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionCreateOrConnectWithoutRoutesInput = {
  create: CompetitionCreateWithoutRoutesInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionCreateOrConnectWithoutSeasonInput = {
  create: CompetitionCreateWithoutSeasonInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionCreateOrConnectWithoutStartListsInput = {
  create: CompetitionCreateWithoutStartListsInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionCreateWithoutCategoryRoundsInput = {
  active?: Maybe<Scalars['Boolean']>;
  address: Scalars['String'];
  club: ClubCreateNestedOneWithoutCompetitionsInput;
  compType: CompetitionTypeCreateNestedOneWithoutCompetitionsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  location: LocationCreateNestedOneWithoutCompetitionsInput;
  name: Scalars['String'];
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitionInput>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitionInput>;
  routes?: Maybe<RouteCreateNestedManyWithoutCompetitionInput>;
  season: SeasonCreateNestedOneWithoutCompetitionsInput;
  startDate: Scalars['DateTime'];
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitionInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionCreateWithoutClubInput = {
  active?: Maybe<Scalars['Boolean']>;
  address: Scalars['String'];
  categoryRounds?: Maybe<CategoryRoundCreateNestedManyWithoutCompetitionInput>;
  compType: CompetitionTypeCreateNestedOneWithoutCompetitionsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  location: LocationCreateNestedOneWithoutCompetitionsInput;
  name: Scalars['String'];
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitionInput>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitionInput>;
  routes?: Maybe<RouteCreateNestedManyWithoutCompetitionInput>;
  season: SeasonCreateNestedOneWithoutCompetitionsInput;
  startDate: Scalars['DateTime'];
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitionInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionCreateWithoutCompTypeInput = {
  active?: Maybe<Scalars['Boolean']>;
  address: Scalars['String'];
  categoryRounds?: Maybe<CategoryRoundCreateNestedManyWithoutCompetitionInput>;
  club: ClubCreateNestedOneWithoutCompetitionsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  location: LocationCreateNestedOneWithoutCompetitionsInput;
  name: Scalars['String'];
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitionInput>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitionInput>;
  routes?: Maybe<RouteCreateNestedManyWithoutCompetitionInput>;
  season: SeasonCreateNestedOneWithoutCompetitionsInput;
  startDate: Scalars['DateTime'];
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitionInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionCreateWithoutLocationInput = {
  active?: Maybe<Scalars['Boolean']>;
  address: Scalars['String'];
  categoryRounds?: Maybe<CategoryRoundCreateNestedManyWithoutCompetitionInput>;
  club: ClubCreateNestedOneWithoutCompetitionsInput;
  compType: CompetitionTypeCreateNestedOneWithoutCompetitionsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  name: Scalars['String'];
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitionInput>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitionInput>;
  routes?: Maybe<RouteCreateNestedManyWithoutCompetitionInput>;
  season: SeasonCreateNestedOneWithoutCompetitionsInput;
  startDate: Scalars['DateTime'];
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitionInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionCreateWithoutRegistrationsInput = {
  active?: Maybe<Scalars['Boolean']>;
  address: Scalars['String'];
  categoryRounds?: Maybe<CategoryRoundCreateNestedManyWithoutCompetitionInput>;
  club: ClubCreateNestedOneWithoutCompetitionsInput;
  compType: CompetitionTypeCreateNestedOneWithoutCompetitionsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  location: LocationCreateNestedOneWithoutCompetitionsInput;
  name: Scalars['String'];
  results?: Maybe<ResultCreateNestedManyWithoutCompetitionInput>;
  routes?: Maybe<RouteCreateNestedManyWithoutCompetitionInput>;
  season: SeasonCreateNestedOneWithoutCompetitionsInput;
  startDate: Scalars['DateTime'];
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitionInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionCreateWithoutResultsInput = {
  active?: Maybe<Scalars['Boolean']>;
  address: Scalars['String'];
  categoryRounds?: Maybe<CategoryRoundCreateNestedManyWithoutCompetitionInput>;
  club: ClubCreateNestedOneWithoutCompetitionsInput;
  compType: CompetitionTypeCreateNestedOneWithoutCompetitionsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  location: LocationCreateNestedOneWithoutCompetitionsInput;
  name: Scalars['String'];
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitionInput>;
  routes?: Maybe<RouteCreateNestedManyWithoutCompetitionInput>;
  season: SeasonCreateNestedOneWithoutCompetitionsInput;
  startDate: Scalars['DateTime'];
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitionInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionCreateWithoutRoutesInput = {
  active?: Maybe<Scalars['Boolean']>;
  address: Scalars['String'];
  categoryRounds?: Maybe<CategoryRoundCreateNestedManyWithoutCompetitionInput>;
  club: ClubCreateNestedOneWithoutCompetitionsInput;
  compType: CompetitionTypeCreateNestedOneWithoutCompetitionsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  location: LocationCreateNestedOneWithoutCompetitionsInput;
  name: Scalars['String'];
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitionInput>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitionInput>;
  season: SeasonCreateNestedOneWithoutCompetitionsInput;
  startDate: Scalars['DateTime'];
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitionInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionCreateWithoutSeasonInput = {
  active?: Maybe<Scalars['Boolean']>;
  address: Scalars['String'];
  categoryRounds?: Maybe<CategoryRoundCreateNestedManyWithoutCompetitionInput>;
  club: ClubCreateNestedOneWithoutCompetitionsInput;
  compType: CompetitionTypeCreateNestedOneWithoutCompetitionsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  location: LocationCreateNestedOneWithoutCompetitionsInput;
  name: Scalars['String'];
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitionInput>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitionInput>;
  routes?: Maybe<RouteCreateNestedManyWithoutCompetitionInput>;
  startDate: Scalars['DateTime'];
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitionInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionCreateWithoutStartListsInput = {
  active?: Maybe<Scalars['Boolean']>;
  address: Scalars['String'];
  categoryRounds?: Maybe<CategoryRoundCreateNestedManyWithoutCompetitionInput>;
  club: ClubCreateNestedOneWithoutCompetitionsInput;
  compType: CompetitionTypeCreateNestedOneWithoutCompetitionsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  location: LocationCreateNestedOneWithoutCompetitionsInput;
  name: Scalars['String'];
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitionInput>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitionInput>;
  routes?: Maybe<RouteCreateNestedManyWithoutCompetitionInput>;
  season: SeasonCreateNestedOneWithoutCompetitionsInput;
  startDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionGroupBy = {
  __typename?: 'CompetitionGroupBy';
  _avg?: Maybe<CompetitionAvgAggregate>;
  _count?: Maybe<CompetitionCountAggregate>;
  _max?: Maybe<CompetitionMaxAggregate>;
  _min?: Maybe<CompetitionMinAggregate>;
  _sum?: Maybe<CompetitionSumAggregate>;
  active: Scalars['Boolean'];
  address: Scalars['String'];
  clubId: Scalars['Int'];
  compTypeId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  id: Scalars['Int'];
  locationId: Scalars['Int'];
  name: Scalars['String'];
  seasonId: Scalars['Int'];
  startDate: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type CompetitionListRelationFilter = {
  every?: Maybe<CompetitionWhereInput>;
  none?: Maybe<CompetitionWhereInput>;
  some?: Maybe<CompetitionWhereInput>;
};

export type CompetitionMaxAggregate = {
  __typename?: 'CompetitionMaxAggregate';
  active?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  clubId?: Maybe<Scalars['Int']>;
  compTypeId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  seasonId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionMaxOrderByAggregateInput = {
  active?: Maybe<SortOrder>;
  address?: Maybe<SortOrder>;
  clubId?: Maybe<SortOrder>;
  compTypeId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seasonId?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CompetitionMinAggregate = {
  __typename?: 'CompetitionMinAggregate';
  active?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  clubId?: Maybe<Scalars['Int']>;
  compTypeId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  seasonId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitionMinOrderByAggregateInput = {
  active?: Maybe<SortOrder>;
  address?: Maybe<SortOrder>;
  clubId?: Maybe<SortOrder>;
  compTypeId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seasonId?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CompetitionOrderByInput = {
  active?: Maybe<SortOrder>;
  address?: Maybe<SortOrder>;
  clubId?: Maybe<SortOrder>;
  compTypeId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seasonId?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CompetitionOrderByWithAggregationInput = {
  _avg?: Maybe<CompetitionAvgOrderByAggregateInput>;
  _count?: Maybe<CompetitionCountOrderByAggregateInput>;
  _max?: Maybe<CompetitionMaxOrderByAggregateInput>;
  _min?: Maybe<CompetitionMinOrderByAggregateInput>;
  _sum?: Maybe<CompetitionSumOrderByAggregateInput>;
  active?: Maybe<SortOrder>;
  address?: Maybe<SortOrder>;
  clubId?: Maybe<SortOrder>;
  compTypeId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seasonId?: Maybe<SortOrder>;
  startDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CompetitionRelationFilter = {
  is?: Maybe<CompetitionWhereInput>;
  isNot?: Maybe<CompetitionWhereInput>;
};

export enum CompetitionScalarFieldEnum {
  Active = 'active',
  Address = 'address',
  ClubId = 'clubId',
  CompTypeId = 'compTypeId',
  CreatedAt = 'createdAt',
  Description = 'description',
  EndDate = 'endDate',
  Id = 'id',
  LocationId = 'locationId',
  Name = 'name',
  SeasonId = 'seasonId',
  StartDate = 'startDate',
  UpdatedAt = 'updatedAt',
}

export type CompetitionScalarWhereInput = {
  AND?: Maybe<Array<CompetitionScalarWhereInput>>;
  NOT?: Maybe<Array<CompetitionScalarWhereInput>>;
  OR?: Maybe<Array<CompetitionScalarWhereInput>>;
  active?: Maybe<BoolFilter>;
  address?: Maybe<StringFilter>;
  clubId?: Maybe<IntFilter>;
  compTypeId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  endDate?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  locationId?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  seasonId?: Maybe<IntFilter>;
  startDate?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CompetitionScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CompetitionScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CompetitionScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CompetitionScalarWhereWithAggregatesInput>>;
  active?: Maybe<BoolWithAggregatesFilter>;
  address?: Maybe<StringWithAggregatesFilter>;
  clubId?: Maybe<IntWithAggregatesFilter>;
  compTypeId?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  description?: Maybe<StringWithAggregatesFilter>;
  endDate?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  locationId?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  seasonId?: Maybe<IntWithAggregatesFilter>;
  startDate?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type CompetitionSumAggregate = {
  __typename?: 'CompetitionSumAggregate';
  clubId?: Maybe<Scalars['Int']>;
  compTypeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  seasonId?: Maybe<Scalars['Int']>;
};

export type CompetitionSumOrderByAggregateInput = {
  clubId?: Maybe<SortOrder>;
  compTypeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  seasonId?: Maybe<SortOrder>;
};

export type CompetitionType = {
  __typename?: 'CompetitionType';
  competitions: Array<Competition>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type CompetitionTypeCompetitionsArgs = {
  cursor?: Maybe<CompetitionWhereUniqueInput>;
  distinct?: Maybe<Array<CompetitionScalarFieldEnum>>;
  orderBy?: Maybe<Array<CompetitionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitionWhereInput>;
};

export type CompetitionTypeAvgAggregate = {
  __typename?: 'CompetitionTypeAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type CompetitionTypeAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type CompetitionTypeCountAggregate = {
  __typename?: 'CompetitionTypeCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type CompetitionTypeCountOrderByAggregateInput = {
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CompetitionTypeCreateInput = {
  competitions?: Maybe<CompetitionCreateNestedManyWithoutCompTypeInput>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CompetitionTypeCreateManyInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type CompetitionTypeCreateNestedOneWithoutCompetitionsInput = {
  connect?: Maybe<CompetitionTypeWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitionTypeCreateOrConnectWithoutCompetitionsInput>;
  create?: Maybe<CompetitionTypeCreateWithoutCompetitionsInput>;
};

export type CompetitionTypeCreateOrConnectWithoutCompetitionsInput = {
  create: CompetitionTypeCreateWithoutCompetitionsInput;
  where: CompetitionTypeWhereUniqueInput;
};

export type CompetitionTypeCreateWithoutCompetitionsInput = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CompetitionTypeGroupBy = {
  __typename?: 'CompetitionTypeGroupBy';
  _avg?: Maybe<CompetitionTypeAvgAggregate>;
  _count?: Maybe<CompetitionTypeCountAggregate>;
  _max?: Maybe<CompetitionTypeMaxAggregate>;
  _min?: Maybe<CompetitionTypeMinAggregate>;
  _sum?: Maybe<CompetitionTypeSumAggregate>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type CompetitionTypeMaxAggregate = {
  __typename?: 'CompetitionTypeMaxAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CompetitionTypeMaxOrderByAggregateInput = {
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CompetitionTypeMinAggregate = {
  __typename?: 'CompetitionTypeMinAggregate';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CompetitionTypeMinOrderByAggregateInput = {
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CompetitionTypeOrderByInput = {
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CompetitionTypeOrderByWithAggregationInput = {
  _avg?: Maybe<CompetitionTypeAvgOrderByAggregateInput>;
  _count?: Maybe<CompetitionTypeCountOrderByAggregateInput>;
  _max?: Maybe<CompetitionTypeMaxOrderByAggregateInput>;
  _min?: Maybe<CompetitionTypeMinOrderByAggregateInput>;
  _sum?: Maybe<CompetitionTypeSumOrderByAggregateInput>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CompetitionTypeRelationFilter = {
  is?: Maybe<CompetitionTypeWhereInput>;
  isNot?: Maybe<CompetitionTypeWhereInput>;
};

export enum CompetitionTypeScalarFieldEnum {
  Description = 'description',
  Id = 'id',
  Name = 'name',
}

export type CompetitionTypeScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CompetitionTypeScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CompetitionTypeScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CompetitionTypeScalarWhereWithAggregatesInput>>;
  description?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
};

export type CompetitionTypeSumAggregate = {
  __typename?: 'CompetitionTypeSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type CompetitionTypeSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type CompetitionTypeUpdateInput = {
  competitions?: Maybe<CompetitionUpdateManyWithoutCompTypeInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CompetitionTypeUpdateManyMutationInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CompetitionTypeUpdateOneRequiredWithoutCompetitionsInput = {
  connect?: Maybe<CompetitionTypeWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitionTypeCreateOrConnectWithoutCompetitionsInput>;
  create?: Maybe<CompetitionTypeCreateWithoutCompetitionsInput>;
  update?: Maybe<CompetitionTypeUpdateWithoutCompetitionsInput>;
  upsert?: Maybe<CompetitionTypeUpsertWithoutCompetitionsInput>;
};

export type CompetitionTypeUpdateWithoutCompetitionsInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CompetitionTypeUpsertWithoutCompetitionsInput = {
  create: CompetitionTypeCreateWithoutCompetitionsInput;
  update: CompetitionTypeUpdateWithoutCompetitionsInput;
};

export type CompetitionTypeWhereInput = {
  AND?: Maybe<Array<CompetitionTypeWhereInput>>;
  NOT?: Maybe<Array<CompetitionTypeWhereInput>>;
  OR?: Maybe<Array<CompetitionTypeWhereInput>>;
  competitions?: Maybe<CompetitionListRelationFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
};

export type CompetitionTypeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type CompetitionUpdateInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  categoryRounds?: Maybe<CategoryRoundUpdateManyWithoutCompetitionInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitionsInput>;
  compType?: Maybe<CompetitionTypeUpdateOneRequiredWithoutCompetitionsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitionsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitionInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitionInput>;
  routes?: Maybe<RouteUpdateManyWithoutCompetitionInput>;
  season?: Maybe<SeasonUpdateOneRequiredWithoutCompetitionsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitionInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitionUpdateManyMutationInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitionUpdateManyWithWhereWithoutClubInput = {
  data: CompetitionUpdateManyMutationInput;
  where: CompetitionScalarWhereInput;
};

export type CompetitionUpdateManyWithWhereWithoutCompTypeInput = {
  data: CompetitionUpdateManyMutationInput;
  where: CompetitionScalarWhereInput;
};

export type CompetitionUpdateManyWithWhereWithoutLocationInput = {
  data: CompetitionUpdateManyMutationInput;
  where: CompetitionScalarWhereInput;
};

export type CompetitionUpdateManyWithWhereWithoutSeasonInput = {
  data: CompetitionUpdateManyMutationInput;
  where: CompetitionScalarWhereInput;
};

export type CompetitionUpdateManyWithoutClubInput = {
  connect?: Maybe<Array<CompetitionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CompetitionCreateOrConnectWithoutClubInput>>;
  create?: Maybe<Array<CompetitionCreateWithoutClubInput>>;
  createMany?: Maybe<CompetitionCreateManyClubInputEnvelope>;
  delete?: Maybe<Array<CompetitionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CompetitionScalarWhereInput>>;
  disconnect?: Maybe<Array<CompetitionWhereUniqueInput>>;
  set?: Maybe<Array<CompetitionWhereUniqueInput>>;
  update?: Maybe<Array<CompetitionUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: Maybe<Array<CompetitionUpdateManyWithWhereWithoutClubInput>>;
  upsert?: Maybe<Array<CompetitionUpsertWithWhereUniqueWithoutClubInput>>;
};

export type CompetitionUpdateManyWithoutCompTypeInput = {
  connect?: Maybe<Array<CompetitionWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CompetitionCreateOrConnectWithoutCompTypeInput>
  >;
  create?: Maybe<Array<CompetitionCreateWithoutCompTypeInput>>;
  createMany?: Maybe<CompetitionCreateManyCompTypeInputEnvelope>;
  delete?: Maybe<Array<CompetitionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CompetitionScalarWhereInput>>;
  disconnect?: Maybe<Array<CompetitionWhereUniqueInput>>;
  set?: Maybe<Array<CompetitionWhereUniqueInput>>;
  update?: Maybe<Array<CompetitionUpdateWithWhereUniqueWithoutCompTypeInput>>;
  updateMany?: Maybe<Array<CompetitionUpdateManyWithWhereWithoutCompTypeInput>>;
  upsert?: Maybe<Array<CompetitionUpsertWithWhereUniqueWithoutCompTypeInput>>;
};

export type CompetitionUpdateManyWithoutLocationInput = {
  connect?: Maybe<Array<CompetitionWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<CompetitionCreateOrConnectWithoutLocationInput>
  >;
  create?: Maybe<Array<CompetitionCreateWithoutLocationInput>>;
  createMany?: Maybe<CompetitionCreateManyLocationInputEnvelope>;
  delete?: Maybe<Array<CompetitionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CompetitionScalarWhereInput>>;
  disconnect?: Maybe<Array<CompetitionWhereUniqueInput>>;
  set?: Maybe<Array<CompetitionWhereUniqueInput>>;
  update?: Maybe<Array<CompetitionUpdateWithWhereUniqueWithoutLocationInput>>;
  updateMany?: Maybe<Array<CompetitionUpdateManyWithWhereWithoutLocationInput>>;
  upsert?: Maybe<Array<CompetitionUpsertWithWhereUniqueWithoutLocationInput>>;
};

export type CompetitionUpdateManyWithoutSeasonInput = {
  connect?: Maybe<Array<CompetitionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CompetitionCreateOrConnectWithoutSeasonInput>>;
  create?: Maybe<Array<CompetitionCreateWithoutSeasonInput>>;
  createMany?: Maybe<CompetitionCreateManySeasonInputEnvelope>;
  delete?: Maybe<Array<CompetitionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CompetitionScalarWhereInput>>;
  disconnect?: Maybe<Array<CompetitionWhereUniqueInput>>;
  set?: Maybe<Array<CompetitionWhereUniqueInput>>;
  update?: Maybe<Array<CompetitionUpdateWithWhereUniqueWithoutSeasonInput>>;
  updateMany?: Maybe<Array<CompetitionUpdateManyWithWhereWithoutSeasonInput>>;
  upsert?: Maybe<Array<CompetitionUpsertWithWhereUniqueWithoutSeasonInput>>;
};

export type CompetitionUpdateOneRequiredWithoutCategoryRoundsInput = {
  connect?: Maybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitionCreateOrConnectWithoutCategoryRoundsInput>;
  create?: Maybe<CompetitionCreateWithoutCategoryRoundsInput>;
  update?: Maybe<CompetitionUpdateWithoutCategoryRoundsInput>;
  upsert?: Maybe<CompetitionUpsertWithoutCategoryRoundsInput>;
};

export type CompetitionUpdateOneRequiredWithoutRegistrationsInput = {
  connect?: Maybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitionCreateOrConnectWithoutRegistrationsInput>;
  create?: Maybe<CompetitionCreateWithoutRegistrationsInput>;
  update?: Maybe<CompetitionUpdateWithoutRegistrationsInput>;
  upsert?: Maybe<CompetitionUpsertWithoutRegistrationsInput>;
};

export type CompetitionUpdateOneRequiredWithoutResultsInput = {
  connect?: Maybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitionCreateOrConnectWithoutResultsInput>;
  create?: Maybe<CompetitionCreateWithoutResultsInput>;
  update?: Maybe<CompetitionUpdateWithoutResultsInput>;
  upsert?: Maybe<CompetitionUpsertWithoutResultsInput>;
};

export type CompetitionUpdateOneRequiredWithoutRoutesInput = {
  connect?: Maybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitionCreateOrConnectWithoutRoutesInput>;
  create?: Maybe<CompetitionCreateWithoutRoutesInput>;
  update?: Maybe<CompetitionUpdateWithoutRoutesInput>;
  upsert?: Maybe<CompetitionUpsertWithoutRoutesInput>;
};

export type CompetitionUpdateOneRequiredWithoutStartListsInput = {
  connect?: Maybe<CompetitionWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitionCreateOrConnectWithoutStartListsInput>;
  create?: Maybe<CompetitionCreateWithoutStartListsInput>;
  update?: Maybe<CompetitionUpdateWithoutStartListsInput>;
  upsert?: Maybe<CompetitionUpsertWithoutStartListsInput>;
};

export type CompetitionUpdateWithWhereUniqueWithoutClubInput = {
  data: CompetitionUpdateWithoutClubInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionUpdateWithWhereUniqueWithoutCompTypeInput = {
  data: CompetitionUpdateWithoutCompTypeInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionUpdateWithWhereUniqueWithoutLocationInput = {
  data: CompetitionUpdateWithoutLocationInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionUpdateWithWhereUniqueWithoutSeasonInput = {
  data: CompetitionUpdateWithoutSeasonInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionUpdateWithoutCategoryRoundsInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitionsInput>;
  compType?: Maybe<CompetitionTypeUpdateOneRequiredWithoutCompetitionsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitionsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitionInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitionInput>;
  routes?: Maybe<RouteUpdateManyWithoutCompetitionInput>;
  season?: Maybe<SeasonUpdateOneRequiredWithoutCompetitionsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitionInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitionUpdateWithoutClubInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  categoryRounds?: Maybe<CategoryRoundUpdateManyWithoutCompetitionInput>;
  compType?: Maybe<CompetitionTypeUpdateOneRequiredWithoutCompetitionsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitionsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitionInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitionInput>;
  routes?: Maybe<RouteUpdateManyWithoutCompetitionInput>;
  season?: Maybe<SeasonUpdateOneRequiredWithoutCompetitionsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitionInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitionUpdateWithoutCompTypeInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  categoryRounds?: Maybe<CategoryRoundUpdateManyWithoutCompetitionInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitionsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitionsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitionInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitionInput>;
  routes?: Maybe<RouteUpdateManyWithoutCompetitionInput>;
  season?: Maybe<SeasonUpdateOneRequiredWithoutCompetitionsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitionInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitionUpdateWithoutLocationInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  categoryRounds?: Maybe<CategoryRoundUpdateManyWithoutCompetitionInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitionsInput>;
  compType?: Maybe<CompetitionTypeUpdateOneRequiredWithoutCompetitionsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitionInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitionInput>;
  routes?: Maybe<RouteUpdateManyWithoutCompetitionInput>;
  season?: Maybe<SeasonUpdateOneRequiredWithoutCompetitionsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitionInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitionUpdateWithoutRegistrationsInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  categoryRounds?: Maybe<CategoryRoundUpdateManyWithoutCompetitionInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitionsInput>;
  compType?: Maybe<CompetitionTypeUpdateOneRequiredWithoutCompetitionsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitionsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitionInput>;
  routes?: Maybe<RouteUpdateManyWithoutCompetitionInput>;
  season?: Maybe<SeasonUpdateOneRequiredWithoutCompetitionsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitionInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitionUpdateWithoutResultsInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  categoryRounds?: Maybe<CategoryRoundUpdateManyWithoutCompetitionInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitionsInput>;
  compType?: Maybe<CompetitionTypeUpdateOneRequiredWithoutCompetitionsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitionsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitionInput>;
  routes?: Maybe<RouteUpdateManyWithoutCompetitionInput>;
  season?: Maybe<SeasonUpdateOneRequiredWithoutCompetitionsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitionInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitionUpdateWithoutRoutesInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  categoryRounds?: Maybe<CategoryRoundUpdateManyWithoutCompetitionInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitionsInput>;
  compType?: Maybe<CompetitionTypeUpdateOneRequiredWithoutCompetitionsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitionsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitionInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitionInput>;
  season?: Maybe<SeasonUpdateOneRequiredWithoutCompetitionsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitionInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitionUpdateWithoutSeasonInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  categoryRounds?: Maybe<CategoryRoundUpdateManyWithoutCompetitionInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitionsInput>;
  compType?: Maybe<CompetitionTypeUpdateOneRequiredWithoutCompetitionsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitionsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitionInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitionInput>;
  routes?: Maybe<RouteUpdateManyWithoutCompetitionInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitionInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitionUpdateWithoutStartListsInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  address?: Maybe<StringFieldUpdateOperationsInput>;
  categoryRounds?: Maybe<CategoryRoundUpdateManyWithoutCompetitionInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitionsInput>;
  compType?: Maybe<CompetitionTypeUpdateOneRequiredWithoutCompetitionsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitionsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitionInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitionInput>;
  routes?: Maybe<RouteUpdateManyWithoutCompetitionInput>;
  season?: Maybe<SeasonUpdateOneRequiredWithoutCompetitionsInput>;
  startDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitionUpsertWithWhereUniqueWithoutClubInput = {
  create: CompetitionCreateWithoutClubInput;
  update: CompetitionUpdateWithoutClubInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionUpsertWithWhereUniqueWithoutCompTypeInput = {
  create: CompetitionCreateWithoutCompTypeInput;
  update: CompetitionUpdateWithoutCompTypeInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionUpsertWithWhereUniqueWithoutLocationInput = {
  create: CompetitionCreateWithoutLocationInput;
  update: CompetitionUpdateWithoutLocationInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionUpsertWithWhereUniqueWithoutSeasonInput = {
  create: CompetitionCreateWithoutSeasonInput;
  update: CompetitionUpdateWithoutSeasonInput;
  where: CompetitionWhereUniqueInput;
};

export type CompetitionUpsertWithoutCategoryRoundsInput = {
  create: CompetitionCreateWithoutCategoryRoundsInput;
  update: CompetitionUpdateWithoutCategoryRoundsInput;
};

export type CompetitionUpsertWithoutRegistrationsInput = {
  create: CompetitionCreateWithoutRegistrationsInput;
  update: CompetitionUpdateWithoutRegistrationsInput;
};

export type CompetitionUpsertWithoutResultsInput = {
  create: CompetitionCreateWithoutResultsInput;
  update: CompetitionUpdateWithoutResultsInput;
};

export type CompetitionUpsertWithoutRoutesInput = {
  create: CompetitionCreateWithoutRoutesInput;
  update: CompetitionUpdateWithoutRoutesInput;
};

export type CompetitionUpsertWithoutStartListsInput = {
  create: CompetitionCreateWithoutStartListsInput;
  update: CompetitionUpdateWithoutStartListsInput;
};

export type CompetitionWhereInput = {
  AND?: Maybe<Array<CompetitionWhereInput>>;
  NOT?: Maybe<Array<CompetitionWhereInput>>;
  OR?: Maybe<Array<CompetitionWhereInput>>;
  active?: Maybe<BoolFilter>;
  address?: Maybe<StringFilter>;
  categoryRounds?: Maybe<CategoryRoundListRelationFilter>;
  club?: Maybe<ClubRelationFilter>;
  clubId?: Maybe<IntFilter>;
  compType?: Maybe<CompetitionTypeRelationFilter>;
  compTypeId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  endDate?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  location?: Maybe<LocationRelationFilter>;
  locationId?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  registrations?: Maybe<RegistrationListRelationFilter>;
  results?: Maybe<ResultListRelationFilter>;
  routes?: Maybe<RouteListRelationFilter>;
  season?: Maybe<SeasonRelationFilter>;
  seasonId?: Maybe<IntFilter>;
  startDate?: Maybe<DateTimeFilter>;
  startLists?: Maybe<StartListListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CompetitionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Competitor = {
  __typename?: 'Competitor';
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  category: Category;
  categoryId: Scalars['Int'];
  club: Club;
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  gender: Gender;
  id: Scalars['Int'];
  lastName: Scalars['String'];
  location: Location;
  locationId: Scalars['Int'];
  publicId: Scalars['String'];
  registrations: Array<Registration>;
  results: Array<Result>;
  scoresBoulder: Array<ScoreBoulder>;
  scoresLead: Array<ScoreLead>;
  scoresSpeed: Array<ScoreSpeed>;
  startLists: Array<StartList>;
  updatedAt: Scalars['DateTime'];
};

export type CompetitorRegistrationsArgs = {
  cursor?: Maybe<RegistrationWhereUniqueInput>;
  distinct?: Maybe<Array<RegistrationScalarFieldEnum>>;
  orderBy?: Maybe<Array<RegistrationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RegistrationWhereInput>;
};

export type CompetitorResultsArgs = {
  cursor?: Maybe<ResultWhereUniqueInput>;
  distinct?: Maybe<Array<ResultScalarFieldEnum>>;
  orderBy?: Maybe<Array<ResultOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ResultWhereInput>;
};

export type CompetitorScoresBoulderArgs = {
  cursor?: Maybe<ScoreBoulderWhereUniqueInput>;
  distinct?: Maybe<Array<ScoreBoulderScalarFieldEnum>>;
  orderBy?: Maybe<Array<ScoreBoulderOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreBoulderWhereInput>;
};

export type CompetitorScoresLeadArgs = {
  cursor?: Maybe<ScoreLeadWhereUniqueInput>;
  distinct?: Maybe<Array<ScoreLeadScalarFieldEnum>>;
  orderBy?: Maybe<Array<ScoreLeadOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreLeadWhereInput>;
};

export type CompetitorScoresSpeedArgs = {
  cursor?: Maybe<ScoreSpeedWhereUniqueInput>;
  distinct?: Maybe<Array<ScoreSpeedScalarFieldEnum>>;
  orderBy?: Maybe<Array<ScoreSpeedOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreSpeedWhereInput>;
};

export type CompetitorStartListsArgs = {
  cursor?: Maybe<StartListWhereUniqueInput>;
  distinct?: Maybe<Array<StartListScalarFieldEnum>>;
  orderBy?: Maybe<Array<StartListOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StartListWhereInput>;
};

export type CompetitorAvgAggregate = {
  __typename?: 'CompetitorAvgAggregate';
  categoryId?: Maybe<Scalars['Float']>;
  clubId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
};

export type CompetitorAvgOrderByAggregateInput = {
  categoryId?: Maybe<SortOrder>;
  clubId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
};

export type CompetitorCountAggregate = {
  __typename?: 'CompetitorCountAggregate';
  _all: Scalars['Int'];
  address: Scalars['Int'];
  birthDate: Scalars['Int'];
  categoryId: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt: Scalars['Int'];
  firstName: Scalars['Int'];
  gender: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
  locationId: Scalars['Int'];
  publicId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CompetitorCountOrderByAggregateInput = {
  address?: Maybe<SortOrder>;
  birthDate?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  clubId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  gender?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  publicId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CompetitorCreateInput = {
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  category: CategoryCreateNestedOneWithoutCompetitorsInput;
  club: ClubCreateNestedOneWithoutCompetitorsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  location: LocationCreateNestedOneWithoutCompetitorsInput;
  publicId?: Maybe<Scalars['String']>;
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitorInput>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadCreateNestedManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitorInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitorCreateManyCategoryInput = {
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  clubId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  gender: Gender;
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  locationId: Scalars['Int'];
  publicId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitorCreateManyCategoryInputEnvelope = {
  data: Array<CompetitorCreateManyCategoryInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CompetitorCreateManyClubInput = {
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  categoryId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  gender: Gender;
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  locationId: Scalars['Int'];
  publicId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitorCreateManyClubInputEnvelope = {
  data: Array<CompetitorCreateManyClubInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CompetitorCreateManyInput = {
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  categoryId: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  gender: Gender;
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  locationId: Scalars['Int'];
  publicId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitorCreateManyLocationInput = {
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  categoryId: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  gender: Gender;
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  publicId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitorCreateManyLocationInputEnvelope = {
  data: Array<CompetitorCreateManyLocationInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CompetitorCreateNestedManyWithoutCategoryInput = {
  connect?: Maybe<Array<CompetitorWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CompetitorCreateOrConnectWithoutCategoryInput>>;
  create?: Maybe<Array<CompetitorCreateWithoutCategoryInput>>;
  createMany?: Maybe<CompetitorCreateManyCategoryInputEnvelope>;
};

export type CompetitorCreateNestedManyWithoutClubInput = {
  connect?: Maybe<Array<CompetitorWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CompetitorCreateOrConnectWithoutClubInput>>;
  create?: Maybe<Array<CompetitorCreateWithoutClubInput>>;
  createMany?: Maybe<CompetitorCreateManyClubInputEnvelope>;
};

export type CompetitorCreateNestedManyWithoutLocationInput = {
  connect?: Maybe<Array<CompetitorWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CompetitorCreateOrConnectWithoutLocationInput>>;
  create?: Maybe<Array<CompetitorCreateWithoutLocationInput>>;
  createMany?: Maybe<CompetitorCreateManyLocationInputEnvelope>;
};

export type CompetitorCreateNestedOneWithoutRegistrationsInput = {
  connect?: Maybe<CompetitorWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitorCreateOrConnectWithoutRegistrationsInput>;
  create?: Maybe<CompetitorCreateWithoutRegistrationsInput>;
};

export type CompetitorCreateNestedOneWithoutResultsInput = {
  connect?: Maybe<CompetitorWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitorCreateOrConnectWithoutResultsInput>;
  create?: Maybe<CompetitorCreateWithoutResultsInput>;
};

export type CompetitorCreateNestedOneWithoutScoresBoulderInput = {
  connect?: Maybe<CompetitorWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitorCreateOrConnectWithoutScoresBoulderInput>;
  create?: Maybe<CompetitorCreateWithoutScoresBoulderInput>;
};

export type CompetitorCreateNestedOneWithoutScoresLeadInput = {
  connect?: Maybe<CompetitorWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitorCreateOrConnectWithoutScoresLeadInput>;
  create?: Maybe<CompetitorCreateWithoutScoresLeadInput>;
};

export type CompetitorCreateNestedOneWithoutScoresSpeedInput = {
  connect?: Maybe<CompetitorWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitorCreateOrConnectWithoutScoresSpeedInput>;
  create?: Maybe<CompetitorCreateWithoutScoresSpeedInput>;
};

export type CompetitorCreateNestedOneWithoutStartListsInput = {
  connect?: Maybe<CompetitorWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitorCreateOrConnectWithoutStartListsInput>;
  create?: Maybe<CompetitorCreateWithoutStartListsInput>;
};

export type CompetitorCreateOrConnectWithoutCategoryInput = {
  create: CompetitorCreateWithoutCategoryInput;
  where: CompetitorWhereUniqueInput;
};

export type CompetitorCreateOrConnectWithoutClubInput = {
  create: CompetitorCreateWithoutClubInput;
  where: CompetitorWhereUniqueInput;
};

export type CompetitorCreateOrConnectWithoutLocationInput = {
  create: CompetitorCreateWithoutLocationInput;
  where: CompetitorWhereUniqueInput;
};

export type CompetitorCreateOrConnectWithoutRegistrationsInput = {
  create: CompetitorCreateWithoutRegistrationsInput;
  where: CompetitorWhereUniqueInput;
};

export type CompetitorCreateOrConnectWithoutResultsInput = {
  create: CompetitorCreateWithoutResultsInput;
  where: CompetitorWhereUniqueInput;
};

export type CompetitorCreateOrConnectWithoutScoresBoulderInput = {
  create: CompetitorCreateWithoutScoresBoulderInput;
  where: CompetitorWhereUniqueInput;
};

export type CompetitorCreateOrConnectWithoutScoresLeadInput = {
  create: CompetitorCreateWithoutScoresLeadInput;
  where: CompetitorWhereUniqueInput;
};

export type CompetitorCreateOrConnectWithoutScoresSpeedInput = {
  create: CompetitorCreateWithoutScoresSpeedInput;
  where: CompetitorWhereUniqueInput;
};

export type CompetitorCreateOrConnectWithoutStartListsInput = {
  create: CompetitorCreateWithoutStartListsInput;
  where: CompetitorWhereUniqueInput;
};

export type CompetitorCreateWithoutCategoryInput = {
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  club: ClubCreateNestedOneWithoutCompetitorsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  location: LocationCreateNestedOneWithoutCompetitorsInput;
  publicId?: Maybe<Scalars['String']>;
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitorInput>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadCreateNestedManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitorInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitorCreateWithoutClubInput = {
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  category: CategoryCreateNestedOneWithoutCompetitorsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  location: LocationCreateNestedOneWithoutCompetitorsInput;
  publicId?: Maybe<Scalars['String']>;
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitorInput>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadCreateNestedManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitorInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitorCreateWithoutLocationInput = {
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  category: CategoryCreateNestedOneWithoutCompetitorsInput;
  club: ClubCreateNestedOneWithoutCompetitorsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  publicId?: Maybe<Scalars['String']>;
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitorInput>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadCreateNestedManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitorInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitorCreateWithoutRegistrationsInput = {
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  category: CategoryCreateNestedOneWithoutCompetitorsInput;
  club: ClubCreateNestedOneWithoutCompetitorsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  location: LocationCreateNestedOneWithoutCompetitorsInput;
  publicId?: Maybe<Scalars['String']>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadCreateNestedManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitorInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitorCreateWithoutResultsInput = {
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  category: CategoryCreateNestedOneWithoutCompetitorsInput;
  club: ClubCreateNestedOneWithoutCompetitorsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  location: LocationCreateNestedOneWithoutCompetitorsInput;
  publicId?: Maybe<Scalars['String']>;
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadCreateNestedManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitorInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitorCreateWithoutScoresBoulderInput = {
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  category: CategoryCreateNestedOneWithoutCompetitorsInput;
  club: ClubCreateNestedOneWithoutCompetitorsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  location: LocationCreateNestedOneWithoutCompetitorsInput;
  publicId?: Maybe<Scalars['String']>;
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitorInput>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadCreateNestedManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitorInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitorCreateWithoutScoresLeadInput = {
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  category: CategoryCreateNestedOneWithoutCompetitorsInput;
  club: ClubCreateNestedOneWithoutCompetitorsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  location: LocationCreateNestedOneWithoutCompetitorsInput;
  publicId?: Maybe<Scalars['String']>;
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitorInput>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitorInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitorCreateWithoutScoresSpeedInput = {
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  category: CategoryCreateNestedOneWithoutCompetitorsInput;
  club: ClubCreateNestedOneWithoutCompetitorsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  location: LocationCreateNestedOneWithoutCompetitorsInput;
  publicId?: Maybe<Scalars['String']>;
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitorInput>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadCreateNestedManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListCreateNestedManyWithoutCompetitorInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitorCreateWithoutStartListsInput = {
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  category: CategoryCreateNestedOneWithoutCompetitorsInput;
  club: ClubCreateNestedOneWithoutCompetitorsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  location: LocationCreateNestedOneWithoutCompetitorsInput;
  publicId?: Maybe<Scalars['String']>;
  registrations?: Maybe<RegistrationCreateNestedManyWithoutCompetitorInput>;
  results?: Maybe<ResultCreateNestedManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadCreateNestedManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutCompetitorInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitorGroupBy = {
  __typename?: 'CompetitorGroupBy';
  _avg?: Maybe<CompetitorAvgAggregate>;
  _count?: Maybe<CompetitorCountAggregate>;
  _max?: Maybe<CompetitorMaxAggregate>;
  _min?: Maybe<CompetitorMinAggregate>;
  _sum?: Maybe<CompetitorSumAggregate>;
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  categoryId: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  gender: Gender;
  id: Scalars['Int'];
  lastName: Scalars['String'];
  locationId: Scalars['Int'];
  publicId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CompetitorListRelationFilter = {
  every?: Maybe<CompetitorWhereInput>;
  none?: Maybe<CompetitorWhereInput>;
  some?: Maybe<CompetitorWhereInput>;
};

export type CompetitorMaxAggregate = {
  __typename?: 'CompetitorMaxAggregate';
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  categoryId?: Maybe<Scalars['Int']>;
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['Int']>;
  publicId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitorMaxOrderByAggregateInput = {
  address?: Maybe<SortOrder>;
  birthDate?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  clubId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  gender?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  publicId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CompetitorMinAggregate = {
  __typename?: 'CompetitorMinAggregate';
  address?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  categoryId?: Maybe<Scalars['Int']>;
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['Int']>;
  publicId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompetitorMinOrderByAggregateInput = {
  address?: Maybe<SortOrder>;
  birthDate?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  clubId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  gender?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  publicId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CompetitorOrderByInput = {
  address?: Maybe<SortOrder>;
  birthDate?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  clubId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  gender?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  publicId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CompetitorOrderByWithAggregationInput = {
  _avg?: Maybe<CompetitorAvgOrderByAggregateInput>;
  _count?: Maybe<CompetitorCountOrderByAggregateInput>;
  _max?: Maybe<CompetitorMaxOrderByAggregateInput>;
  _min?: Maybe<CompetitorMinOrderByAggregateInput>;
  _sum?: Maybe<CompetitorSumOrderByAggregateInput>;
  address?: Maybe<SortOrder>;
  birthDate?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  clubId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  gender?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  publicId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CompetitorRelationFilter = {
  is?: Maybe<CompetitorWhereInput>;
  isNot?: Maybe<CompetitorWhereInput>;
};

export enum CompetitorScalarFieldEnum {
  Address = 'address',
  BirthDate = 'birthDate',
  CategoryId = 'categoryId',
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  FirstName = 'firstName',
  Gender = 'gender',
  Id = 'id',
  LastName = 'lastName',
  LocationId = 'locationId',
  PublicId = 'publicId',
  UpdatedAt = 'updatedAt',
}

export type CompetitorScalarWhereInput = {
  AND?: Maybe<Array<CompetitorScalarWhereInput>>;
  NOT?: Maybe<Array<CompetitorScalarWhereInput>>;
  OR?: Maybe<Array<CompetitorScalarWhereInput>>;
  address?: Maybe<StringNullableFilter>;
  birthDate?: Maybe<DateTimeNullableFilter>;
  categoryId?: Maybe<IntFilter>;
  clubId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  firstName?: Maybe<StringFilter>;
  gender?: Maybe<EnumGenderFilter>;
  id?: Maybe<IntFilter>;
  lastName?: Maybe<StringFilter>;
  locationId?: Maybe<IntFilter>;
  publicId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CompetitorScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CompetitorScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CompetitorScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CompetitorScalarWhereWithAggregatesInput>>;
  address?: Maybe<StringNullableWithAggregatesFilter>;
  birthDate?: Maybe<DateTimeNullableWithAggregatesFilter>;
  categoryId?: Maybe<IntWithAggregatesFilter>;
  clubId?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  firstName?: Maybe<StringWithAggregatesFilter>;
  gender?: Maybe<EnumGenderWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  lastName?: Maybe<StringWithAggregatesFilter>;
  locationId?: Maybe<IntWithAggregatesFilter>;
  publicId?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type CompetitorSumAggregate = {
  __typename?: 'CompetitorSumAggregate';
  categoryId?: Maybe<Scalars['Int']>;
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
};

export type CompetitorSumOrderByAggregateInput = {
  categoryId?: Maybe<SortOrder>;
  clubId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
};

export type CompetitorUpdateInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  birthDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutCompetitorsInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitorsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitorsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitorInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderUpdateManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadUpdateManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedUpdateManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitorInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitorUpdateManyMutationInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  birthDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitorUpdateManyWithWhereWithoutCategoryInput = {
  data: CompetitorUpdateManyMutationInput;
  where: CompetitorScalarWhereInput;
};

export type CompetitorUpdateManyWithWhereWithoutClubInput = {
  data: CompetitorUpdateManyMutationInput;
  where: CompetitorScalarWhereInput;
};

export type CompetitorUpdateManyWithWhereWithoutLocationInput = {
  data: CompetitorUpdateManyMutationInput;
  where: CompetitorScalarWhereInput;
};

export type CompetitorUpdateManyWithoutCategoryInput = {
  connect?: Maybe<Array<CompetitorWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CompetitorCreateOrConnectWithoutCategoryInput>>;
  create?: Maybe<Array<CompetitorCreateWithoutCategoryInput>>;
  createMany?: Maybe<CompetitorCreateManyCategoryInputEnvelope>;
  delete?: Maybe<Array<CompetitorWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CompetitorScalarWhereInput>>;
  disconnect?: Maybe<Array<CompetitorWhereUniqueInput>>;
  set?: Maybe<Array<CompetitorWhereUniqueInput>>;
  update?: Maybe<Array<CompetitorUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: Maybe<Array<CompetitorUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: Maybe<Array<CompetitorUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type CompetitorUpdateManyWithoutClubInput = {
  connect?: Maybe<Array<CompetitorWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CompetitorCreateOrConnectWithoutClubInput>>;
  create?: Maybe<Array<CompetitorCreateWithoutClubInput>>;
  createMany?: Maybe<CompetitorCreateManyClubInputEnvelope>;
  delete?: Maybe<Array<CompetitorWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CompetitorScalarWhereInput>>;
  disconnect?: Maybe<Array<CompetitorWhereUniqueInput>>;
  set?: Maybe<Array<CompetitorWhereUniqueInput>>;
  update?: Maybe<Array<CompetitorUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: Maybe<Array<CompetitorUpdateManyWithWhereWithoutClubInput>>;
  upsert?: Maybe<Array<CompetitorUpsertWithWhereUniqueWithoutClubInput>>;
};

export type CompetitorUpdateManyWithoutLocationInput = {
  connect?: Maybe<Array<CompetitorWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CompetitorCreateOrConnectWithoutLocationInput>>;
  create?: Maybe<Array<CompetitorCreateWithoutLocationInput>>;
  createMany?: Maybe<CompetitorCreateManyLocationInputEnvelope>;
  delete?: Maybe<Array<CompetitorWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CompetitorScalarWhereInput>>;
  disconnect?: Maybe<Array<CompetitorWhereUniqueInput>>;
  set?: Maybe<Array<CompetitorWhereUniqueInput>>;
  update?: Maybe<Array<CompetitorUpdateWithWhereUniqueWithoutLocationInput>>;
  updateMany?: Maybe<Array<CompetitorUpdateManyWithWhereWithoutLocationInput>>;
  upsert?: Maybe<Array<CompetitorUpsertWithWhereUniqueWithoutLocationInput>>;
};

export type CompetitorUpdateOneRequiredWithoutRegistrationsInput = {
  connect?: Maybe<CompetitorWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitorCreateOrConnectWithoutRegistrationsInput>;
  create?: Maybe<CompetitorCreateWithoutRegistrationsInput>;
  update?: Maybe<CompetitorUpdateWithoutRegistrationsInput>;
  upsert?: Maybe<CompetitorUpsertWithoutRegistrationsInput>;
};

export type CompetitorUpdateOneRequiredWithoutResultsInput = {
  connect?: Maybe<CompetitorWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitorCreateOrConnectWithoutResultsInput>;
  create?: Maybe<CompetitorCreateWithoutResultsInput>;
  update?: Maybe<CompetitorUpdateWithoutResultsInput>;
  upsert?: Maybe<CompetitorUpsertWithoutResultsInput>;
};

export type CompetitorUpdateOneRequiredWithoutScoresBoulderInput = {
  connect?: Maybe<CompetitorWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitorCreateOrConnectWithoutScoresBoulderInput>;
  create?: Maybe<CompetitorCreateWithoutScoresBoulderInput>;
  update?: Maybe<CompetitorUpdateWithoutScoresBoulderInput>;
  upsert?: Maybe<CompetitorUpsertWithoutScoresBoulderInput>;
};

export type CompetitorUpdateOneRequiredWithoutScoresLeadInput = {
  connect?: Maybe<CompetitorWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitorCreateOrConnectWithoutScoresLeadInput>;
  create?: Maybe<CompetitorCreateWithoutScoresLeadInput>;
  update?: Maybe<CompetitorUpdateWithoutScoresLeadInput>;
  upsert?: Maybe<CompetitorUpsertWithoutScoresLeadInput>;
};

export type CompetitorUpdateOneRequiredWithoutScoresSpeedInput = {
  connect?: Maybe<CompetitorWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitorCreateOrConnectWithoutScoresSpeedInput>;
  create?: Maybe<CompetitorCreateWithoutScoresSpeedInput>;
  update?: Maybe<CompetitorUpdateWithoutScoresSpeedInput>;
  upsert?: Maybe<CompetitorUpsertWithoutScoresSpeedInput>;
};

export type CompetitorUpdateOneRequiredWithoutStartListsInput = {
  connect?: Maybe<CompetitorWhereUniqueInput>;
  connectOrCreate?: Maybe<CompetitorCreateOrConnectWithoutStartListsInput>;
  create?: Maybe<CompetitorCreateWithoutStartListsInput>;
  update?: Maybe<CompetitorUpdateWithoutStartListsInput>;
  upsert?: Maybe<CompetitorUpsertWithoutStartListsInput>;
};

export type CompetitorUpdateWithWhereUniqueWithoutCategoryInput = {
  data: CompetitorUpdateWithoutCategoryInput;
  where: CompetitorWhereUniqueInput;
};

export type CompetitorUpdateWithWhereUniqueWithoutClubInput = {
  data: CompetitorUpdateWithoutClubInput;
  where: CompetitorWhereUniqueInput;
};

export type CompetitorUpdateWithWhereUniqueWithoutLocationInput = {
  data: CompetitorUpdateWithoutLocationInput;
  where: CompetitorWhereUniqueInput;
};

export type CompetitorUpdateWithoutCategoryInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  birthDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitorsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitorsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitorInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderUpdateManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadUpdateManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedUpdateManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitorInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitorUpdateWithoutClubInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  birthDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutCompetitorsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitorsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitorInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderUpdateManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadUpdateManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedUpdateManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitorInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitorUpdateWithoutLocationInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  birthDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutCompetitorsInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitorsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitorInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderUpdateManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadUpdateManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedUpdateManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitorInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitorUpdateWithoutRegistrationsInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  birthDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutCompetitorsInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitorsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitorsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderUpdateManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadUpdateManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedUpdateManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitorInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitorUpdateWithoutResultsInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  birthDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutCompetitorsInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitorsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitorsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderUpdateManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadUpdateManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedUpdateManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitorInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitorUpdateWithoutScoresBoulderInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  birthDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutCompetitorsInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitorsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitorsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitorInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadUpdateManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedUpdateManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitorInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitorUpdateWithoutScoresLeadInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  birthDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutCompetitorsInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitorsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitorsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitorInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderUpdateManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedUpdateManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitorInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitorUpdateWithoutScoresSpeedInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  birthDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutCompetitorsInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitorsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitorsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitorInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderUpdateManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadUpdateManyWithoutCompetitorInput>;
  startLists?: Maybe<StartListUpdateManyWithoutCompetitorInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitorUpdateWithoutStartListsInput = {
  address?: Maybe<NullableStringFieldUpdateOperationsInput>;
  birthDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutCompetitorsInput>;
  club?: Maybe<ClubUpdateOneRequiredWithoutCompetitorsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  gender?: Maybe<EnumGenderFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneRequiredWithoutCompetitorsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutCompetitorInput>;
  results?: Maybe<ResultUpdateManyWithoutCompetitorInput>;
  scoresBoulder?: Maybe<ScoreBoulderUpdateManyWithoutCompetitorInput>;
  scoresLead?: Maybe<ScoreLeadUpdateManyWithoutCompetitorInput>;
  scoresSpeed?: Maybe<ScoreSpeedUpdateManyWithoutCompetitorInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompetitorUpsertWithWhereUniqueWithoutCategoryInput = {
  create: CompetitorCreateWithoutCategoryInput;
  update: CompetitorUpdateWithoutCategoryInput;
  where: CompetitorWhereUniqueInput;
};

export type CompetitorUpsertWithWhereUniqueWithoutClubInput = {
  create: CompetitorCreateWithoutClubInput;
  update: CompetitorUpdateWithoutClubInput;
  where: CompetitorWhereUniqueInput;
};

export type CompetitorUpsertWithWhereUniqueWithoutLocationInput = {
  create: CompetitorCreateWithoutLocationInput;
  update: CompetitorUpdateWithoutLocationInput;
  where: CompetitorWhereUniqueInput;
};

export type CompetitorUpsertWithoutRegistrationsInput = {
  create: CompetitorCreateWithoutRegistrationsInput;
  update: CompetitorUpdateWithoutRegistrationsInput;
};

export type CompetitorUpsertWithoutResultsInput = {
  create: CompetitorCreateWithoutResultsInput;
  update: CompetitorUpdateWithoutResultsInput;
};

export type CompetitorUpsertWithoutScoresBoulderInput = {
  create: CompetitorCreateWithoutScoresBoulderInput;
  update: CompetitorUpdateWithoutScoresBoulderInput;
};

export type CompetitorUpsertWithoutScoresLeadInput = {
  create: CompetitorCreateWithoutScoresLeadInput;
  update: CompetitorUpdateWithoutScoresLeadInput;
};

export type CompetitorUpsertWithoutScoresSpeedInput = {
  create: CompetitorCreateWithoutScoresSpeedInput;
  update: CompetitorUpdateWithoutScoresSpeedInput;
};

export type CompetitorUpsertWithoutStartListsInput = {
  create: CompetitorCreateWithoutStartListsInput;
  update: CompetitorUpdateWithoutStartListsInput;
};

export type CompetitorWhereInput = {
  AND?: Maybe<Array<CompetitorWhereInput>>;
  NOT?: Maybe<Array<CompetitorWhereInput>>;
  OR?: Maybe<Array<CompetitorWhereInput>>;
  address?: Maybe<StringNullableFilter>;
  birthDate?: Maybe<DateTimeNullableFilter>;
  category?: Maybe<CategoryRelationFilter>;
  categoryId?: Maybe<IntFilter>;
  club?: Maybe<ClubRelationFilter>;
  clubId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  firstName?: Maybe<StringFilter>;
  gender?: Maybe<EnumGenderFilter>;
  id?: Maybe<IntFilter>;
  lastName?: Maybe<StringFilter>;
  location?: Maybe<LocationRelationFilter>;
  locationId?: Maybe<IntFilter>;
  publicId?: Maybe<StringFilter>;
  registrations?: Maybe<RegistrationListRelationFilter>;
  results?: Maybe<ResultListRelationFilter>;
  scoresBoulder?: Maybe<ScoreBoulderListRelationFilter>;
  scoresLead?: Maybe<ScoreLeadListRelationFilter>;
  scoresSpeed?: Maybe<ScoreSpeedListRelationFilter>;
  startLists?: Maybe<StartListListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CompetitorWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  publicId?: Maybe<Scalars['String']>;
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['Int'];
  locations: Array<Location>;
  name: Scalars['String'];
};

export type CountryLocationsArgs = {
  cursor?: Maybe<LocationWhereUniqueInput>;
  distinct?: Maybe<Array<LocationScalarFieldEnum>>;
  orderBy?: Maybe<Array<LocationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LocationWhereInput>;
};

export type CountryAvgAggregate = {
  __typename?: 'CountryAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type CountryAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type CountryCountAggregate = {
  __typename?: 'CountryCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type CountryCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CountryCreateInput = {
  locations?: Maybe<LocationCreateNestedManyWithoutCountryInput>;
  name: Scalars['String'];
};

export type CountryCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type CountryCreateNestedOneWithoutLocationsInput = {
  connect?: Maybe<CountryWhereUniqueInput>;
  connectOrCreate?: Maybe<CountryCreateOrConnectWithoutLocationsInput>;
  create?: Maybe<CountryCreateWithoutLocationsInput>;
};

export type CountryCreateOrConnectWithoutLocationsInput = {
  create: CountryCreateWithoutLocationsInput;
  where: CountryWhereUniqueInput;
};

export type CountryCreateWithoutLocationsInput = {
  name: Scalars['String'];
};

export type CountryGroupBy = {
  __typename?: 'CountryGroupBy';
  _avg?: Maybe<CountryAvgAggregate>;
  _count?: Maybe<CountryCountAggregate>;
  _max?: Maybe<CountryMaxAggregate>;
  _min?: Maybe<CountryMinAggregate>;
  _sum?: Maybe<CountrySumAggregate>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type CountryMaxAggregate = {
  __typename?: 'CountryMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CountryMaxOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CountryMinAggregate = {
  __typename?: 'CountryMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CountryMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CountryOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CountryOrderByWithAggregationInput = {
  _avg?: Maybe<CountryAvgOrderByAggregateInput>;
  _count?: Maybe<CountryCountOrderByAggregateInput>;
  _max?: Maybe<CountryMaxOrderByAggregateInput>;
  _min?: Maybe<CountryMinOrderByAggregateInput>;
  _sum?: Maybe<CountrySumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type CountryRelationFilter = {
  is?: Maybe<CountryWhereInput>;
  isNot?: Maybe<CountryWhereInput>;
};

export enum CountryScalarFieldEnum {
  Id = 'id',
  Name = 'name',
}

export type CountryScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CountryScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CountryScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CountryScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
};

export type CountrySumAggregate = {
  __typename?: 'CountrySumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type CountrySumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type CountryUpdateInput = {
  locations?: Maybe<LocationUpdateManyWithoutCountryInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CountryUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CountryUpdateOneRequiredWithoutLocationsInput = {
  connect?: Maybe<CountryWhereUniqueInput>;
  connectOrCreate?: Maybe<CountryCreateOrConnectWithoutLocationsInput>;
  create?: Maybe<CountryCreateWithoutLocationsInput>;
  update?: Maybe<CountryUpdateWithoutLocationsInput>;
  upsert?: Maybe<CountryUpsertWithoutLocationsInput>;
};

export type CountryUpdateWithoutLocationsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CountryUpsertWithoutLocationsInput = {
  create: CountryCreateWithoutLocationsInput;
  update: CountryUpdateWithoutLocationsInput;
};

export type CountryWhereInput = {
  AND?: Maybe<Array<CountryWhereInput>>;
  NOT?: Maybe<Array<CountryWhereInput>>;
  OR?: Maybe<Array<CountryWhereInput>>;
  id?: Maybe<IntFilter>;
  locations?: Maybe<LocationListRelationFilter>;
  name?: Maybe<StringFilter>;
};

export type CountryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type EnumGenderFieldUpdateOperationsInput = {
  set?: Maybe<Gender>;
};

export type EnumGenderFilter = {
  equals?: Maybe<Gender>;
  in?: Maybe<Array<Gender>>;
  not?: Maybe<NestedEnumGenderFilter>;
  notIn?: Maybe<Array<Gender>>;
};

export type EnumGenderWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumGenderFilter>;
  _min?: Maybe<NestedEnumGenderFilter>;
  equals?: Maybe<Gender>;
  in?: Maybe<Array<Gender>>;
  not?: Maybe<NestedEnumGenderWithAggregatesFilter>;
  notIn?: Maybe<Array<Gender>>;
};

export type EnumRoundFieldUpdateOperationsInput = {
  set?: Maybe<Round>;
};

export type EnumRoundFilter = {
  equals?: Maybe<Round>;
  in?: Maybe<Array<Round>>;
  not?: Maybe<NestedEnumRoundFilter>;
  notIn?: Maybe<Array<Round>>;
};

export type EnumRoundWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumRoundFilter>;
  _min?: Maybe<NestedEnumRoundFilter>;
  equals?: Maybe<Round>;
  in?: Maybe<Array<Round>>;
  not?: Maybe<NestedEnumRoundWithAggregatesFilter>;
  notIn?: Maybe<Array<Round>>;
};

export type EnumRouteTypeFieldUpdateOperationsInput = {
  set?: Maybe<RouteType>;
};

export type EnumRouteTypeFilter = {
  equals?: Maybe<RouteType>;
  in?: Maybe<Array<RouteType>>;
  not?: Maybe<NestedEnumRouteTypeFilter>;
  notIn?: Maybe<Array<RouteType>>;
};

export type EnumRouteTypeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumRouteTypeFilter>;
  _min?: Maybe<NestedEnumRouteTypeFilter>;
  equals?: Maybe<RouteType>;
  in?: Maybe<Array<RouteType>>;
  not?: Maybe<NestedEnumRouteTypeWithAggregatesFilter>;
  notIn?: Maybe<Array<RouteType>>;
};

export type EnumUserRoleFieldUpdateOperationsInput = {
  set?: Maybe<UserRole>;
};

export type EnumUserRoleFilter = {
  equals?: Maybe<UserRole>;
  in?: Maybe<Array<UserRole>>;
  not?: Maybe<NestedEnumUserRoleFilter>;
  notIn?: Maybe<Array<UserRole>>;
};

export type EnumUserRoleWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumUserRoleFilter>;
  _min?: Maybe<NestedEnumUserRoleFilter>;
  equals?: Maybe<UserRole>;
  in?: Maybe<Array<UserRole>>;
  not?: Maybe<NestedEnumUserRoleWithAggregatesFilter>;
  notIn?: Maybe<Array<UserRole>>;
};

export type FindStartListInput = {
  competitionId: Scalars['Float'];
  startNumber: Scalars['Float'];
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
}

export type Grade = {
  __typename?: 'Grade';
  id: Scalars['Int'];
  name: Scalars['String'];
  routes: Array<Route>;
};

export type GradeRoutesArgs = {
  cursor?: Maybe<RouteWhereUniqueInput>;
  distinct?: Maybe<Array<RouteScalarFieldEnum>>;
  orderBy?: Maybe<Array<RouteOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RouteWhereInput>;
};

export type GradeAvgAggregate = {
  __typename?: 'GradeAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type GradeAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type GradeCountAggregate = {
  __typename?: 'GradeCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type GradeCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type GradeCreateInput = {
  name: Scalars['String'];
  routes?: Maybe<RouteCreateNestedManyWithoutGradeInput>;
};

export type GradeCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type GradeCreateNestedOneWithoutRoutesInput = {
  connect?: Maybe<GradeWhereUniqueInput>;
  connectOrCreate?: Maybe<GradeCreateOrConnectWithoutRoutesInput>;
  create?: Maybe<GradeCreateWithoutRoutesInput>;
};

export type GradeCreateOrConnectWithoutRoutesInput = {
  create: GradeCreateWithoutRoutesInput;
  where: GradeWhereUniqueInput;
};

export type GradeCreateWithoutRoutesInput = {
  name: Scalars['String'];
};

export type GradeGroupBy = {
  __typename?: 'GradeGroupBy';
  _avg?: Maybe<GradeAvgAggregate>;
  _count?: Maybe<GradeCountAggregate>;
  _max?: Maybe<GradeMaxAggregate>;
  _min?: Maybe<GradeMinAggregate>;
  _sum?: Maybe<GradeSumAggregate>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type GradeMaxAggregate = {
  __typename?: 'GradeMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type GradeMaxOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type GradeMinAggregate = {
  __typename?: 'GradeMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type GradeMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type GradeOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type GradeOrderByWithAggregationInput = {
  _avg?: Maybe<GradeAvgOrderByAggregateInput>;
  _count?: Maybe<GradeCountOrderByAggregateInput>;
  _max?: Maybe<GradeMaxOrderByAggregateInput>;
  _min?: Maybe<GradeMinOrderByAggregateInput>;
  _sum?: Maybe<GradeSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type GradeRelationFilter = {
  is?: Maybe<GradeWhereInput>;
  isNot?: Maybe<GradeWhereInput>;
};

export enum GradeScalarFieldEnum {
  Id = 'id',
  Name = 'name',
}

export type GradeScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<GradeScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<GradeScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<GradeScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
};

export type GradeSumAggregate = {
  __typename?: 'GradeSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type GradeSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type GradeUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  routes?: Maybe<RouteUpdateManyWithoutGradeInput>;
};

export type GradeUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type GradeUpdateOneRequiredWithoutRoutesInput = {
  connect?: Maybe<GradeWhereUniqueInput>;
  connectOrCreate?: Maybe<GradeCreateOrConnectWithoutRoutesInput>;
  create?: Maybe<GradeCreateWithoutRoutesInput>;
  update?: Maybe<GradeUpdateWithoutRoutesInput>;
  upsert?: Maybe<GradeUpsertWithoutRoutesInput>;
};

export type GradeUpdateWithoutRoutesInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type GradeUpsertWithoutRoutesInput = {
  create: GradeCreateWithoutRoutesInput;
  update: GradeUpdateWithoutRoutesInput;
};

export type GradeWhereInput = {
  AND?: Maybe<Array<GradeWhereInput>>;
  NOT?: Maybe<Array<GradeWhereInput>>;
  OR?: Maybe<Array<GradeWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  routes?: Maybe<RouteListRelationFilter>;
};

export type GradeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type LiveResultOutput = {
  __typename?: 'LiveResultOutput';
  category: Category;
  competition: Competition;
  results: Array<ResultField>;
};

export type Location = {
  __typename?: 'Location';
  clubs: Array<Club>;
  competitions: Array<Competition>;
  competitors: Array<Competitor>;
  country: Country;
  countryId: Scalars['Int'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  region: Region;
  regionId: Scalars['Int'];
  users: Array<User>;
};

export type LocationClubsArgs = {
  cursor?: Maybe<ClubWhereUniqueInput>;
  distinct?: Maybe<Array<ClubScalarFieldEnum>>;
  orderBy?: Maybe<Array<ClubOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ClubWhereInput>;
};

export type LocationCompetitionsArgs = {
  cursor?: Maybe<CompetitionWhereUniqueInput>;
  distinct?: Maybe<Array<CompetitionScalarFieldEnum>>;
  orderBy?: Maybe<Array<CompetitionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitionWhereInput>;
};

export type LocationCompetitorsArgs = {
  cursor?: Maybe<CompetitorWhereUniqueInput>;
  distinct?: Maybe<Array<CompetitorScalarFieldEnum>>;
  orderBy?: Maybe<Array<CompetitorOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitorWhereInput>;
};

export type LocationUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type LocationAvgAggregate = {
  __typename?: 'LocationAvgAggregate';
  countryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  regionId?: Maybe<Scalars['Float']>;
};

export type LocationAvgOrderByAggregateInput = {
  countryId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  regionId?: Maybe<SortOrder>;
};

export type LocationCountAggregate = {
  __typename?: 'LocationCountAggregate';
  _all: Scalars['Int'];
  countryId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  regionId: Scalars['Int'];
};

export type LocationCountOrderByAggregateInput = {
  countryId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  regionId?: Maybe<SortOrder>;
};

export type LocationCreateInput = {
  clubs?: Maybe<ClubCreateNestedManyWithoutLocationInput>;
  competitions?: Maybe<CompetitionCreateNestedManyWithoutLocationInput>;
  competitors?: Maybe<CompetitorCreateNestedManyWithoutLocationInput>;
  country: CountryCreateNestedOneWithoutLocationsInput;
  name?: Maybe<Scalars['String']>;
  region: RegionCreateNestedOneWithoutLocationsInput;
  users?: Maybe<UserCreateNestedManyWithoutLocationInput>;
};

export type LocationCreateManyCountryInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  regionId: Scalars['Int'];
};

export type LocationCreateManyCountryInputEnvelope = {
  data: Array<LocationCreateManyCountryInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type LocationCreateManyInput = {
  countryId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  regionId: Scalars['Int'];
};

export type LocationCreateManyRegionInput = {
  countryId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type LocationCreateManyRegionInputEnvelope = {
  data: Array<LocationCreateManyRegionInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type LocationCreateNestedManyWithoutCountryInput = {
  connect?: Maybe<Array<LocationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<LocationCreateOrConnectWithoutCountryInput>>;
  create?: Maybe<Array<LocationCreateWithoutCountryInput>>;
  createMany?: Maybe<LocationCreateManyCountryInputEnvelope>;
};

export type LocationCreateNestedManyWithoutRegionInput = {
  connect?: Maybe<Array<LocationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<LocationCreateOrConnectWithoutRegionInput>>;
  create?: Maybe<Array<LocationCreateWithoutRegionInput>>;
  createMany?: Maybe<LocationCreateManyRegionInputEnvelope>;
};

export type LocationCreateNestedOneWithoutClubsInput = {
  connect?: Maybe<LocationWhereUniqueInput>;
  connectOrCreate?: Maybe<LocationCreateOrConnectWithoutClubsInput>;
  create?: Maybe<LocationCreateWithoutClubsInput>;
};

export type LocationCreateNestedOneWithoutCompetitionsInput = {
  connect?: Maybe<LocationWhereUniqueInput>;
  connectOrCreate?: Maybe<LocationCreateOrConnectWithoutCompetitionsInput>;
  create?: Maybe<LocationCreateWithoutCompetitionsInput>;
};

export type LocationCreateNestedOneWithoutCompetitorsInput = {
  connect?: Maybe<LocationWhereUniqueInput>;
  connectOrCreate?: Maybe<LocationCreateOrConnectWithoutCompetitorsInput>;
  create?: Maybe<LocationCreateWithoutCompetitorsInput>;
};

export type LocationCreateNestedOneWithoutUsersInput = {
  connect?: Maybe<LocationWhereUniqueInput>;
  connectOrCreate?: Maybe<LocationCreateOrConnectWithoutUsersInput>;
  create?: Maybe<LocationCreateWithoutUsersInput>;
};

export type LocationCreateOrConnectWithoutClubsInput = {
  create: LocationCreateWithoutClubsInput;
  where: LocationWhereUniqueInput;
};

export type LocationCreateOrConnectWithoutCompetitionsInput = {
  create: LocationCreateWithoutCompetitionsInput;
  where: LocationWhereUniqueInput;
};

export type LocationCreateOrConnectWithoutCompetitorsInput = {
  create: LocationCreateWithoutCompetitorsInput;
  where: LocationWhereUniqueInput;
};

export type LocationCreateOrConnectWithoutCountryInput = {
  create: LocationCreateWithoutCountryInput;
  where: LocationWhereUniqueInput;
};

export type LocationCreateOrConnectWithoutRegionInput = {
  create: LocationCreateWithoutRegionInput;
  where: LocationWhereUniqueInput;
};

export type LocationCreateOrConnectWithoutUsersInput = {
  create: LocationCreateWithoutUsersInput;
  where: LocationWhereUniqueInput;
};

export type LocationCreateWithoutClubsInput = {
  competitions?: Maybe<CompetitionCreateNestedManyWithoutLocationInput>;
  competitors?: Maybe<CompetitorCreateNestedManyWithoutLocationInput>;
  country: CountryCreateNestedOneWithoutLocationsInput;
  name?: Maybe<Scalars['String']>;
  region: RegionCreateNestedOneWithoutLocationsInput;
  users?: Maybe<UserCreateNestedManyWithoutLocationInput>;
};

export type LocationCreateWithoutCompetitionsInput = {
  clubs?: Maybe<ClubCreateNestedManyWithoutLocationInput>;
  competitors?: Maybe<CompetitorCreateNestedManyWithoutLocationInput>;
  country: CountryCreateNestedOneWithoutLocationsInput;
  name?: Maybe<Scalars['String']>;
  region: RegionCreateNestedOneWithoutLocationsInput;
  users?: Maybe<UserCreateNestedManyWithoutLocationInput>;
};

export type LocationCreateWithoutCompetitorsInput = {
  clubs?: Maybe<ClubCreateNestedManyWithoutLocationInput>;
  competitions?: Maybe<CompetitionCreateNestedManyWithoutLocationInput>;
  country: CountryCreateNestedOneWithoutLocationsInput;
  name?: Maybe<Scalars['String']>;
  region: RegionCreateNestedOneWithoutLocationsInput;
  users?: Maybe<UserCreateNestedManyWithoutLocationInput>;
};

export type LocationCreateWithoutCountryInput = {
  clubs?: Maybe<ClubCreateNestedManyWithoutLocationInput>;
  competitions?: Maybe<CompetitionCreateNestedManyWithoutLocationInput>;
  competitors?: Maybe<CompetitorCreateNestedManyWithoutLocationInput>;
  name?: Maybe<Scalars['String']>;
  region: RegionCreateNestedOneWithoutLocationsInput;
  users?: Maybe<UserCreateNestedManyWithoutLocationInput>;
};

export type LocationCreateWithoutRegionInput = {
  clubs?: Maybe<ClubCreateNestedManyWithoutLocationInput>;
  competitions?: Maybe<CompetitionCreateNestedManyWithoutLocationInput>;
  competitors?: Maybe<CompetitorCreateNestedManyWithoutLocationInput>;
  country: CountryCreateNestedOneWithoutLocationsInput;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<UserCreateNestedManyWithoutLocationInput>;
};

export type LocationCreateWithoutUsersInput = {
  clubs?: Maybe<ClubCreateNestedManyWithoutLocationInput>;
  competitions?: Maybe<CompetitionCreateNestedManyWithoutLocationInput>;
  competitors?: Maybe<CompetitorCreateNestedManyWithoutLocationInput>;
  country: CountryCreateNestedOneWithoutLocationsInput;
  name?: Maybe<Scalars['String']>;
  region: RegionCreateNestedOneWithoutLocationsInput;
};

export type LocationGroupBy = {
  __typename?: 'LocationGroupBy';
  _avg?: Maybe<LocationAvgAggregate>;
  _count?: Maybe<LocationCountAggregate>;
  _max?: Maybe<LocationMaxAggregate>;
  _min?: Maybe<LocationMinAggregate>;
  _sum?: Maybe<LocationSumAggregate>;
  countryId: Scalars['Int'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  regionId: Scalars['Int'];
};

export type LocationListRelationFilter = {
  every?: Maybe<LocationWhereInput>;
  none?: Maybe<LocationWhereInput>;
  some?: Maybe<LocationWhereInput>;
};

export type LocationMaxAggregate = {
  __typename?: 'LocationMaxAggregate';
  countryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  regionId?: Maybe<Scalars['Int']>;
};

export type LocationMaxOrderByAggregateInput = {
  countryId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  regionId?: Maybe<SortOrder>;
};

export type LocationMinAggregate = {
  __typename?: 'LocationMinAggregate';
  countryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  regionId?: Maybe<Scalars['Int']>;
};

export type LocationMinOrderByAggregateInput = {
  countryId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  regionId?: Maybe<SortOrder>;
};

export type LocationOrderByInput = {
  countryId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  regionId?: Maybe<SortOrder>;
};

export type LocationOrderByWithAggregationInput = {
  _avg?: Maybe<LocationAvgOrderByAggregateInput>;
  _count?: Maybe<LocationCountOrderByAggregateInput>;
  _max?: Maybe<LocationMaxOrderByAggregateInput>;
  _min?: Maybe<LocationMinOrderByAggregateInput>;
  _sum?: Maybe<LocationSumOrderByAggregateInput>;
  countryId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  regionId?: Maybe<SortOrder>;
};

export type LocationRelationFilter = {
  is?: Maybe<LocationWhereInput>;
  isNot?: Maybe<LocationWhereInput>;
};

export enum LocationScalarFieldEnum {
  CountryId = 'countryId',
  Id = 'id',
  Name = 'name',
  RegionId = 'regionId',
}

export type LocationScalarWhereInput = {
  AND?: Maybe<Array<LocationScalarWhereInput>>;
  NOT?: Maybe<Array<LocationScalarWhereInput>>;
  OR?: Maybe<Array<LocationScalarWhereInput>>;
  countryId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  regionId?: Maybe<IntFilter>;
};

export type LocationScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<LocationScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<LocationScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<LocationScalarWhereWithAggregatesInput>>;
  countryId?: Maybe<IntWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  regionId?: Maybe<IntWithAggregatesFilter>;
};

export type LocationSumAggregate = {
  __typename?: 'LocationSumAggregate';
  countryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  regionId?: Maybe<Scalars['Int']>;
};

export type LocationSumOrderByAggregateInput = {
  countryId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  regionId?: Maybe<SortOrder>;
};

export type LocationUpdateInput = {
  clubs?: Maybe<ClubUpdateManyWithoutLocationInput>;
  competitions?: Maybe<CompetitionUpdateManyWithoutLocationInput>;
  competitors?: Maybe<CompetitorUpdateManyWithoutLocationInput>;
  country?: Maybe<CountryUpdateOneRequiredWithoutLocationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  region?: Maybe<RegionUpdateOneRequiredWithoutLocationsInput>;
  users?: Maybe<UserUpdateManyWithoutLocationInput>;
};

export type LocationUpdateManyMutationInput = {
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type LocationUpdateManyWithWhereWithoutCountryInput = {
  data: LocationUpdateManyMutationInput;
  where: LocationScalarWhereInput;
};

export type LocationUpdateManyWithWhereWithoutRegionInput = {
  data: LocationUpdateManyMutationInput;
  where: LocationScalarWhereInput;
};

export type LocationUpdateManyWithoutCountryInput = {
  connect?: Maybe<Array<LocationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<LocationCreateOrConnectWithoutCountryInput>>;
  create?: Maybe<Array<LocationCreateWithoutCountryInput>>;
  createMany?: Maybe<LocationCreateManyCountryInputEnvelope>;
  delete?: Maybe<Array<LocationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<LocationScalarWhereInput>>;
  disconnect?: Maybe<Array<LocationWhereUniqueInput>>;
  set?: Maybe<Array<LocationWhereUniqueInput>>;
  update?: Maybe<Array<LocationUpdateWithWhereUniqueWithoutCountryInput>>;
  updateMany?: Maybe<Array<LocationUpdateManyWithWhereWithoutCountryInput>>;
  upsert?: Maybe<Array<LocationUpsertWithWhereUniqueWithoutCountryInput>>;
};

export type LocationUpdateManyWithoutRegionInput = {
  connect?: Maybe<Array<LocationWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<LocationCreateOrConnectWithoutRegionInput>>;
  create?: Maybe<Array<LocationCreateWithoutRegionInput>>;
  createMany?: Maybe<LocationCreateManyRegionInputEnvelope>;
  delete?: Maybe<Array<LocationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<LocationScalarWhereInput>>;
  disconnect?: Maybe<Array<LocationWhereUniqueInput>>;
  set?: Maybe<Array<LocationWhereUniqueInput>>;
  update?: Maybe<Array<LocationUpdateWithWhereUniqueWithoutRegionInput>>;
  updateMany?: Maybe<Array<LocationUpdateManyWithWhereWithoutRegionInput>>;
  upsert?: Maybe<Array<LocationUpsertWithWhereUniqueWithoutRegionInput>>;
};

export type LocationUpdateOneRequiredWithoutClubsInput = {
  connect?: Maybe<LocationWhereUniqueInput>;
  connectOrCreate?: Maybe<LocationCreateOrConnectWithoutClubsInput>;
  create?: Maybe<LocationCreateWithoutClubsInput>;
  update?: Maybe<LocationUpdateWithoutClubsInput>;
  upsert?: Maybe<LocationUpsertWithoutClubsInput>;
};

export type LocationUpdateOneRequiredWithoutCompetitionsInput = {
  connect?: Maybe<LocationWhereUniqueInput>;
  connectOrCreate?: Maybe<LocationCreateOrConnectWithoutCompetitionsInput>;
  create?: Maybe<LocationCreateWithoutCompetitionsInput>;
  update?: Maybe<LocationUpdateWithoutCompetitionsInput>;
  upsert?: Maybe<LocationUpsertWithoutCompetitionsInput>;
};

export type LocationUpdateOneRequiredWithoutCompetitorsInput = {
  connect?: Maybe<LocationWhereUniqueInput>;
  connectOrCreate?: Maybe<LocationCreateOrConnectWithoutCompetitorsInput>;
  create?: Maybe<LocationCreateWithoutCompetitorsInput>;
  update?: Maybe<LocationUpdateWithoutCompetitorsInput>;
  upsert?: Maybe<LocationUpsertWithoutCompetitorsInput>;
};

export type LocationUpdateOneWithoutUsersInput = {
  connect?: Maybe<LocationWhereUniqueInput>;
  connectOrCreate?: Maybe<LocationCreateOrConnectWithoutUsersInput>;
  create?: Maybe<LocationCreateWithoutUsersInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<LocationUpdateWithoutUsersInput>;
  upsert?: Maybe<LocationUpsertWithoutUsersInput>;
};

export type LocationUpdateWithWhereUniqueWithoutCountryInput = {
  data: LocationUpdateWithoutCountryInput;
  where: LocationWhereUniqueInput;
};

export type LocationUpdateWithWhereUniqueWithoutRegionInput = {
  data: LocationUpdateWithoutRegionInput;
  where: LocationWhereUniqueInput;
};

export type LocationUpdateWithoutClubsInput = {
  competitions?: Maybe<CompetitionUpdateManyWithoutLocationInput>;
  competitors?: Maybe<CompetitorUpdateManyWithoutLocationInput>;
  country?: Maybe<CountryUpdateOneRequiredWithoutLocationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  region?: Maybe<RegionUpdateOneRequiredWithoutLocationsInput>;
  users?: Maybe<UserUpdateManyWithoutLocationInput>;
};

export type LocationUpdateWithoutCompetitionsInput = {
  clubs?: Maybe<ClubUpdateManyWithoutLocationInput>;
  competitors?: Maybe<CompetitorUpdateManyWithoutLocationInput>;
  country?: Maybe<CountryUpdateOneRequiredWithoutLocationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  region?: Maybe<RegionUpdateOneRequiredWithoutLocationsInput>;
  users?: Maybe<UserUpdateManyWithoutLocationInput>;
};

export type LocationUpdateWithoutCompetitorsInput = {
  clubs?: Maybe<ClubUpdateManyWithoutLocationInput>;
  competitions?: Maybe<CompetitionUpdateManyWithoutLocationInput>;
  country?: Maybe<CountryUpdateOneRequiredWithoutLocationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  region?: Maybe<RegionUpdateOneRequiredWithoutLocationsInput>;
  users?: Maybe<UserUpdateManyWithoutLocationInput>;
};

export type LocationUpdateWithoutCountryInput = {
  clubs?: Maybe<ClubUpdateManyWithoutLocationInput>;
  competitions?: Maybe<CompetitionUpdateManyWithoutLocationInput>;
  competitors?: Maybe<CompetitorUpdateManyWithoutLocationInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  region?: Maybe<RegionUpdateOneRequiredWithoutLocationsInput>;
  users?: Maybe<UserUpdateManyWithoutLocationInput>;
};

export type LocationUpdateWithoutRegionInput = {
  clubs?: Maybe<ClubUpdateManyWithoutLocationInput>;
  competitions?: Maybe<CompetitionUpdateManyWithoutLocationInput>;
  competitors?: Maybe<CompetitorUpdateManyWithoutLocationInput>;
  country?: Maybe<CountryUpdateOneRequiredWithoutLocationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  users?: Maybe<UserUpdateManyWithoutLocationInput>;
};

export type LocationUpdateWithoutUsersInput = {
  clubs?: Maybe<ClubUpdateManyWithoutLocationInput>;
  competitions?: Maybe<CompetitionUpdateManyWithoutLocationInput>;
  competitors?: Maybe<CompetitorUpdateManyWithoutLocationInput>;
  country?: Maybe<CountryUpdateOneRequiredWithoutLocationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  region?: Maybe<RegionUpdateOneRequiredWithoutLocationsInput>;
};

export type LocationUpsertWithWhereUniqueWithoutCountryInput = {
  create: LocationCreateWithoutCountryInput;
  update: LocationUpdateWithoutCountryInput;
  where: LocationWhereUniqueInput;
};

export type LocationUpsertWithWhereUniqueWithoutRegionInput = {
  create: LocationCreateWithoutRegionInput;
  update: LocationUpdateWithoutRegionInput;
  where: LocationWhereUniqueInput;
};

export type LocationUpsertWithoutClubsInput = {
  create: LocationCreateWithoutClubsInput;
  update: LocationUpdateWithoutClubsInput;
};

export type LocationUpsertWithoutCompetitionsInput = {
  create: LocationCreateWithoutCompetitionsInput;
  update: LocationUpdateWithoutCompetitionsInput;
};

export type LocationUpsertWithoutCompetitorsInput = {
  create: LocationCreateWithoutCompetitorsInput;
  update: LocationUpdateWithoutCompetitorsInput;
};

export type LocationUpsertWithoutUsersInput = {
  create: LocationCreateWithoutUsersInput;
  update: LocationUpdateWithoutUsersInput;
};

export type LocationWhereInput = {
  AND?: Maybe<Array<LocationWhereInput>>;
  NOT?: Maybe<Array<LocationWhereInput>>;
  OR?: Maybe<Array<LocationWhereInput>>;
  clubs?: Maybe<ClubListRelationFilter>;
  competitions?: Maybe<CompetitionListRelationFilter>;
  competitors?: Maybe<CompetitorListRelationFilter>;
  country?: Maybe<CountryRelationFilter>;
  countryId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  region?: Maybe<RegionRelationFilter>;
  regionId?: Maybe<IntFilter>;
  users?: Maybe<UserListRelationFilter>;
};

export type LocationWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  publicId: Scalars['String'];
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createCategoryRound: CategoryRound;
  createClub: Club;
  createComment: Comment;
  createCompetition: Competition;
  createCompetitionType: CompetitionType;
  createCompetitor: Competitor;
  createCountry: Country;
  createGrade: Grade;
  createLocation: Location;
  createManyCategory: AffectedRowsOutput;
  createManyCategoryRound: AffectedRowsOutput;
  createManyClub: AffectedRowsOutput;
  createManyComment: AffectedRowsOutput;
  createManyCompetition: AffectedRowsOutput;
  createManyCompetitionType: AffectedRowsOutput;
  createManyCompetitor: AffectedRowsOutput;
  createManyCountry: AffectedRowsOutput;
  createManyGrade: AffectedRowsOutput;
  createManyLocation: AffectedRowsOutput;
  createManyRegion: AffectedRowsOutput;
  createManyRegistration: AffectedRowsOutput;
  createManyResult: AffectedRowsOutput;
  createManyRoute: AffectedRowsOutput;
  createManyScoreBoulder: AffectedRowsOutput;
  createManyScoreLead: AffectedRowsOutput;
  createManyScoreSpeed: AffectedRowsOutput;
  createManySeason: AffectedRowsOutput;
  createManyStartList: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createRegion: Region;
  createRegistration: Registration;
  createResult: Result;
  createRoute: Route;
  createScoreBoulder: ScoreBoulder;
  createScoreLead: ScoreLead;
  createScoreSpeed: ScoreSpeed;
  createSeason: Season;
  createStartList: StartList;
  createUser: User;
  deleteCategory?: Maybe<Category>;
  deleteCategoryRound?: Maybe<CategoryRound>;
  deleteClub?: Maybe<Club>;
  deleteComment?: Maybe<Comment>;
  deleteCompetition?: Maybe<Competition>;
  deleteCompetitionType?: Maybe<CompetitionType>;
  deleteCompetitor?: Maybe<Competitor>;
  deleteCountry?: Maybe<Country>;
  deleteGrade?: Maybe<Grade>;
  deleteLocation?: Maybe<Location>;
  deleteManyCategory: AffectedRowsOutput;
  deleteManyCategoryRound: AffectedRowsOutput;
  deleteManyClub: AffectedRowsOutput;
  deleteManyComment: AffectedRowsOutput;
  deleteManyCompetition: AffectedRowsOutput;
  deleteManyCompetitionType: AffectedRowsOutput;
  deleteManyCompetitor: AffectedRowsOutput;
  deleteManyCountry: AffectedRowsOutput;
  deleteManyGrade: AffectedRowsOutput;
  deleteManyLocation: AffectedRowsOutput;
  deleteManyRegion: AffectedRowsOutput;
  deleteManyRegistration: AffectedRowsOutput;
  deleteManyResult: AffectedRowsOutput;
  deleteManyRoute: AffectedRowsOutput;
  deleteManyScoreBoulder: AffectedRowsOutput;
  deleteManyScoreLead: AffectedRowsOutput;
  deleteManyScoreSpeed: AffectedRowsOutput;
  deleteManySeason: AffectedRowsOutput;
  deleteManyStartList: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteRegion?: Maybe<Region>;
  deleteRegistration?: Maybe<Registration>;
  deleteResult?: Maybe<Result>;
  deleteRoute?: Maybe<Route>;
  deleteScoreBoulder?: Maybe<ScoreBoulder>;
  deleteScoreLead?: Maybe<ScoreLead>;
  deleteScoreSpeed?: Maybe<ScoreSpeed>;
  deleteSeason?: Maybe<Season>;
  deleteStartList?: Maybe<StartList>;
  deleteUser?: Maybe<User>;
  login: LoginOutput;
  register: User;
  scoreBoulder: ScoreOutput;
  scoreLead: ScoreOutput;
  scoreSpeed: ScoreOutput;
  updateCategory?: Maybe<Category>;
  updateCategoryRound?: Maybe<CategoryRound>;
  updateClub?: Maybe<Club>;
  updateComment?: Maybe<Comment>;
  updateCompetition?: Maybe<Competition>;
  updateCompetitionType?: Maybe<CompetitionType>;
  updateCompetitor?: Maybe<Competitor>;
  updateCountry?: Maybe<Country>;
  updateGrade?: Maybe<Grade>;
  updateLocation?: Maybe<Location>;
  updateManyCategory: AffectedRowsOutput;
  updateManyCategoryRound: AffectedRowsOutput;
  updateManyClub: AffectedRowsOutput;
  updateManyComment: AffectedRowsOutput;
  updateManyCompetition: AffectedRowsOutput;
  updateManyCompetitionType: AffectedRowsOutput;
  updateManyCompetitor: AffectedRowsOutput;
  updateManyCountry: AffectedRowsOutput;
  updateManyGrade: AffectedRowsOutput;
  updateManyLocation: AffectedRowsOutput;
  updateManyRegion: AffectedRowsOutput;
  updateManyRegistration: AffectedRowsOutput;
  updateManyResult: AffectedRowsOutput;
  updateManyRoute: AffectedRowsOutput;
  updateManyScoreBoulder: AffectedRowsOutput;
  updateManyScoreLead: AffectedRowsOutput;
  updateManyScoreSpeed: AffectedRowsOutput;
  updateManySeason: AffectedRowsOutput;
  updateManyStartList: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateRegion?: Maybe<Region>;
  updateRegistration?: Maybe<Registration>;
  updateResult?: Maybe<Result>;
  updateRoute?: Maybe<Route>;
  updateScoreBoulder?: Maybe<ScoreBoulder>;
  updateScoreLead?: Maybe<ScoreLead>;
  updateScoreSpeed?: Maybe<ScoreSpeed>;
  updateSeason?: Maybe<Season>;
  updateStartList?: Maybe<StartList>;
  updateUser?: Maybe<User>;
  upsertCategory: Category;
  upsertCategoryRound: CategoryRound;
  upsertClub: Club;
  upsertComment: Comment;
  upsertCompetition: Competition;
  upsertCompetitionType: CompetitionType;
  upsertCompetitor: Competitor;
  upsertCountry: Country;
  upsertGrade: Grade;
  upsertLocation: Location;
  upsertRegion: Region;
  upsertRegistration: Registration;
  upsertResult: Result;
  upsertRoute: Route;
  upsertScoreBoulder: ScoreBoulder;
  upsertScoreLead: ScoreLead;
  upsertScoreSpeed: ScoreSpeed;
  upsertSeason: Season;
  upsertStartList: StartList;
  upsertUser: User;
};

export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};

export type MutationCreateCategoryRoundArgs = {
  data: CategoryRoundCreateInput;
};

export type MutationCreateClubArgs = {
  data: ClubCreateInput;
};

export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};

export type MutationCreateCompetitionArgs = {
  data: CompetitionCreateInput;
};

export type MutationCreateCompetitionTypeArgs = {
  data: CompetitionTypeCreateInput;
};

export type MutationCreateCompetitorArgs = {
  data: CompetitorCreateInput;
};

export type MutationCreateCountryArgs = {
  data: CountryCreateInput;
};

export type MutationCreateGradeArgs = {
  data: GradeCreateInput;
};

export type MutationCreateLocationArgs = {
  data: LocationCreateInput;
};

export type MutationCreateManyCategoryArgs = {
  data: Array<CategoryCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyCategoryRoundArgs = {
  data: Array<CategoryRoundCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyClubArgs = {
  data: Array<ClubCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyCommentArgs = {
  data: Array<CommentCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyCompetitionArgs = {
  data: Array<CompetitionCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyCompetitionTypeArgs = {
  data: Array<CompetitionTypeCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyCompetitorArgs = {
  data: Array<CompetitorCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyCountryArgs = {
  data: Array<CountryCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyGradeArgs = {
  data: Array<GradeCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyLocationArgs = {
  data: Array<LocationCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyRegionArgs = {
  data: Array<RegionCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyRegistrationArgs = {
  data: Array<RegistrationCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyResultArgs = {
  data: Array<ResultCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyRouteArgs = {
  data: Array<RouteCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyScoreBoulderArgs = {
  data: Array<ScoreBoulderCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyScoreLeadArgs = {
  data: Array<ScoreLeadCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyScoreSpeedArgs = {
  data: Array<ScoreSpeedCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManySeasonArgs = {
  data: Array<SeasonCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyStartListArgs = {
  data: Array<StartListCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateRegionArgs = {
  data: RegionCreateInput;
};

export type MutationCreateRegistrationArgs = {
  data: RegistrationCreateInput;
};

export type MutationCreateResultArgs = {
  data: ResultCreateInput;
};

export type MutationCreateRouteArgs = {
  data: RouteCreateInput;
};

export type MutationCreateScoreBoulderArgs = {
  data: ScoreBoulderCreateInput;
};

export type MutationCreateScoreLeadArgs = {
  data: ScoreLeadCreateInput;
};

export type MutationCreateScoreSpeedArgs = {
  data: ScoreSpeedCreateInput;
};

export type MutationCreateSeasonArgs = {
  data: SeasonCreateInput;
};

export type MutationCreateStartListArgs = {
  data: StartListCreateInput;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};

export type MutationDeleteCategoryRoundArgs = {
  where: CategoryRoundWhereUniqueInput;
};

export type MutationDeleteClubArgs = {
  where: ClubWhereUniqueInput;
};

export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};

export type MutationDeleteCompetitionArgs = {
  where: CompetitionWhereUniqueInput;
};

export type MutationDeleteCompetitionTypeArgs = {
  where: CompetitionTypeWhereUniqueInput;
};

export type MutationDeleteCompetitorArgs = {
  where: CompetitorWhereUniqueInput;
};

export type MutationDeleteCountryArgs = {
  where: CountryWhereUniqueInput;
};

export type MutationDeleteGradeArgs = {
  where: GradeWhereUniqueInput;
};

export type MutationDeleteLocationArgs = {
  where: LocationWhereUniqueInput;
};

export type MutationDeleteManyCategoryArgs = {
  where?: Maybe<CategoryWhereInput>;
};

export type MutationDeleteManyCategoryRoundArgs = {
  where?: Maybe<CategoryRoundWhereInput>;
};

export type MutationDeleteManyClubArgs = {
  where?: Maybe<ClubWhereInput>;
};

export type MutationDeleteManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
};

export type MutationDeleteManyCompetitionArgs = {
  where?: Maybe<CompetitionWhereInput>;
};

export type MutationDeleteManyCompetitionTypeArgs = {
  where?: Maybe<CompetitionTypeWhereInput>;
};

export type MutationDeleteManyCompetitorArgs = {
  where?: Maybe<CompetitorWhereInput>;
};

export type MutationDeleteManyCountryArgs = {
  where?: Maybe<CountryWhereInput>;
};

export type MutationDeleteManyGradeArgs = {
  where?: Maybe<GradeWhereInput>;
};

export type MutationDeleteManyLocationArgs = {
  where?: Maybe<LocationWhereInput>;
};

export type MutationDeleteManyRegionArgs = {
  where?: Maybe<RegionWhereInput>;
};

export type MutationDeleteManyRegistrationArgs = {
  where?: Maybe<RegistrationWhereInput>;
};

export type MutationDeleteManyResultArgs = {
  where?: Maybe<ResultWhereInput>;
};

export type MutationDeleteManyRouteArgs = {
  where?: Maybe<RouteWhereInput>;
};

export type MutationDeleteManyScoreBoulderArgs = {
  where?: Maybe<ScoreBoulderWhereInput>;
};

export type MutationDeleteManyScoreLeadArgs = {
  where?: Maybe<ScoreLeadWhereInput>;
};

export type MutationDeleteManyScoreSpeedArgs = {
  where?: Maybe<ScoreSpeedWhereInput>;
};

export type MutationDeleteManySeasonArgs = {
  where?: Maybe<SeasonWhereInput>;
};

export type MutationDeleteManyStartListArgs = {
  where?: Maybe<StartListWhereInput>;
};

export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};

export type MutationDeleteRegionArgs = {
  where: RegionWhereUniqueInput;
};

export type MutationDeleteRegistrationArgs = {
  where: RegistrationWhereUniqueInput;
};

export type MutationDeleteResultArgs = {
  where: ResultWhereUniqueInput;
};

export type MutationDeleteRouteArgs = {
  where: RouteWhereUniqueInput;
};

export type MutationDeleteScoreBoulderArgs = {
  where: ScoreBoulderWhereUniqueInput;
};

export type MutationDeleteScoreLeadArgs = {
  where: ScoreLeadWhereUniqueInput;
};

export type MutationDeleteScoreSpeedArgs = {
  where: ScoreSpeedWhereUniqueInput;
};

export type MutationDeleteSeasonArgs = {
  where: SeasonWhereUniqueInput;
};

export type MutationDeleteStartListArgs = {
  where: StartListWhereUniqueInput;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationLoginArgs = {
  credentials: LoginInput;
};

export type MutationRegisterArgs = {
  credentials: RegisterInput;
};

export type MutationScoreBoulderArgs = {
  data: ScoreInput;
};

export type MutationScoreLeadArgs = {
  data: ScoreInput;
};

export type MutationScoreSpeedArgs = {
  data: ScoreInput;
};

export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type MutationUpdateCategoryRoundArgs = {
  data: CategoryRoundUpdateInput;
  where: CategoryRoundWhereUniqueInput;
};

export type MutationUpdateClubArgs = {
  data: ClubUpdateInput;
  where: ClubWhereUniqueInput;
};

export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};

export type MutationUpdateCompetitionArgs = {
  data: CompetitionUpdateInput;
  where: CompetitionWhereUniqueInput;
};

export type MutationUpdateCompetitionTypeArgs = {
  data: CompetitionTypeUpdateInput;
  where: CompetitionTypeWhereUniqueInput;
};

export type MutationUpdateCompetitorArgs = {
  data: CompetitorUpdateInput;
  where: CompetitorWhereUniqueInput;
};

export type MutationUpdateCountryArgs = {
  data: CountryUpdateInput;
  where: CountryWhereUniqueInput;
};

export type MutationUpdateGradeArgs = {
  data: GradeUpdateInput;
  where: GradeWhereUniqueInput;
};

export type MutationUpdateLocationArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};

export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateManyMutationInput;
  where?: Maybe<CategoryWhereInput>;
};

export type MutationUpdateManyCategoryRoundArgs = {
  data: CategoryRoundUpdateManyMutationInput;
  where?: Maybe<CategoryRoundWhereInput>;
};

export type MutationUpdateManyClubArgs = {
  data: ClubUpdateManyMutationInput;
  where?: Maybe<ClubWhereInput>;
};

export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where?: Maybe<CommentWhereInput>;
};

export type MutationUpdateManyCompetitionArgs = {
  data: CompetitionUpdateManyMutationInput;
  where?: Maybe<CompetitionWhereInput>;
};

export type MutationUpdateManyCompetitionTypeArgs = {
  data: CompetitionTypeUpdateManyMutationInput;
  where?: Maybe<CompetitionTypeWhereInput>;
};

export type MutationUpdateManyCompetitorArgs = {
  data: CompetitorUpdateManyMutationInput;
  where?: Maybe<CompetitorWhereInput>;
};

export type MutationUpdateManyCountryArgs = {
  data: CountryUpdateManyMutationInput;
  where?: Maybe<CountryWhereInput>;
};

export type MutationUpdateManyGradeArgs = {
  data: GradeUpdateManyMutationInput;
  where?: Maybe<GradeWhereInput>;
};

export type MutationUpdateManyLocationArgs = {
  data: LocationUpdateManyMutationInput;
  where?: Maybe<LocationWhereInput>;
};

export type MutationUpdateManyRegionArgs = {
  data: RegionUpdateManyMutationInput;
  where?: Maybe<RegionWhereInput>;
};

export type MutationUpdateManyRegistrationArgs = {
  data: RegistrationUpdateManyMutationInput;
  where?: Maybe<RegistrationWhereInput>;
};

export type MutationUpdateManyResultArgs = {
  data: ResultUpdateManyMutationInput;
  where?: Maybe<ResultWhereInput>;
};

export type MutationUpdateManyRouteArgs = {
  data: RouteUpdateManyMutationInput;
  where?: Maybe<RouteWhereInput>;
};

export type MutationUpdateManyScoreBoulderArgs = {
  data: ScoreBoulderUpdateManyMutationInput;
  where?: Maybe<ScoreBoulderWhereInput>;
};

export type MutationUpdateManyScoreLeadArgs = {
  data: ScoreLeadUpdateManyMutationInput;
  where?: Maybe<ScoreLeadWhereInput>;
};

export type MutationUpdateManyScoreSpeedArgs = {
  data: ScoreSpeedUpdateManyMutationInput;
  where?: Maybe<ScoreSpeedWhereInput>;
};

export type MutationUpdateManySeasonArgs = {
  data: SeasonUpdateManyMutationInput;
  where?: Maybe<SeasonWhereInput>;
};

export type MutationUpdateManyStartListArgs = {
  data: StartListUpdateManyMutationInput;
  where?: Maybe<StartListWhereInput>;
};

export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};

export type MutationUpdateRegionArgs = {
  data: RegionUpdateInput;
  where: RegionWhereUniqueInput;
};

export type MutationUpdateRegistrationArgs = {
  data: RegistrationUpdateInput;
  where: RegistrationWhereUniqueInput;
};

export type MutationUpdateResultArgs = {
  data: ResultUpdateInput;
  where: ResultWhereUniqueInput;
};

export type MutationUpdateRouteArgs = {
  data: RouteUpdateInput;
  where: RouteWhereUniqueInput;
};

export type MutationUpdateScoreBoulderArgs = {
  data: ScoreBoulderUpdateInput;
  where: ScoreBoulderWhereUniqueInput;
};

export type MutationUpdateScoreLeadArgs = {
  data: ScoreLeadUpdateInput;
  where: ScoreLeadWhereUniqueInput;
};

export type MutationUpdateScoreSpeedArgs = {
  data: ScoreSpeedUpdateInput;
  where: ScoreSpeedWhereUniqueInput;
};

export type MutationUpdateSeasonArgs = {
  data: SeasonUpdateInput;
  where: SeasonWhereUniqueInput;
};

export type MutationUpdateStartListArgs = {
  data: StartListUpdateInput;
  where: StartListWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpsertCategoryArgs = {
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type MutationUpsertCategoryRoundArgs = {
  create: CategoryRoundCreateInput;
  update: CategoryRoundUpdateInput;
  where: CategoryRoundWhereUniqueInput;
};

export type MutationUpsertClubArgs = {
  create: ClubCreateInput;
  update: ClubUpdateInput;
  where: ClubWhereUniqueInput;
};

export type MutationUpsertCommentArgs = {
  create: CommentCreateInput;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};

export type MutationUpsertCompetitionArgs = {
  create: CompetitionCreateInput;
  update: CompetitionUpdateInput;
  where: CompetitionWhereUniqueInput;
};

export type MutationUpsertCompetitionTypeArgs = {
  create: CompetitionTypeCreateInput;
  update: CompetitionTypeUpdateInput;
  where: CompetitionTypeWhereUniqueInput;
};

export type MutationUpsertCompetitorArgs = {
  create: CompetitorCreateInput;
  update: CompetitorUpdateInput;
  where: CompetitorWhereUniqueInput;
};

export type MutationUpsertCountryArgs = {
  create: CountryCreateInput;
  update: CountryUpdateInput;
  where: CountryWhereUniqueInput;
};

export type MutationUpsertGradeArgs = {
  create: GradeCreateInput;
  update: GradeUpdateInput;
  where: GradeWhereUniqueInput;
};

export type MutationUpsertLocationArgs = {
  create: LocationCreateInput;
  update: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};

export type MutationUpsertRegionArgs = {
  create: RegionCreateInput;
  update: RegionUpdateInput;
  where: RegionWhereUniqueInput;
};

export type MutationUpsertRegistrationArgs = {
  create: RegistrationCreateInput;
  update: RegistrationUpdateInput;
  where: RegistrationWhereUniqueInput;
};

export type MutationUpsertResultArgs = {
  create: ResultCreateInput;
  update: ResultUpdateInput;
  where: ResultWhereUniqueInput;
};

export type MutationUpsertRouteArgs = {
  create: RouteCreateInput;
  update: RouteUpdateInput;
  where: RouteWhereUniqueInput;
};

export type MutationUpsertScoreBoulderArgs = {
  create: ScoreBoulderCreateInput;
  update: ScoreBoulderUpdateInput;
  where: ScoreBoulderWhereUniqueInput;
};

export type MutationUpsertScoreLeadArgs = {
  create: ScoreLeadCreateInput;
  update: ScoreLeadUpdateInput;
  where: ScoreLeadWhereUniqueInput;
};

export type MutationUpsertScoreSpeedArgs = {
  create: ScoreSpeedCreateInput;
  update: ScoreSpeedUpdateInput;
  where: ScoreSpeedWhereUniqueInput;
};

export type MutationUpsertSeasonArgs = {
  create: SeasonCreateInput;
  update: SeasonUpdateInput;
  where: SeasonWhereUniqueInput;
};

export type MutationUpsertStartListArgs = {
  create: StartListCreateInput;
  update: StartListUpdateInput;
  where: StartListWhereUniqueInput;
};

export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumGenderFilter = {
  equals?: Maybe<Gender>;
  in?: Maybe<Array<Gender>>;
  not?: Maybe<NestedEnumGenderFilter>;
  notIn?: Maybe<Array<Gender>>;
};

export type NestedEnumGenderWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumGenderFilter>;
  _min?: Maybe<NestedEnumGenderFilter>;
  equals?: Maybe<Gender>;
  in?: Maybe<Array<Gender>>;
  not?: Maybe<NestedEnumGenderWithAggregatesFilter>;
  notIn?: Maybe<Array<Gender>>;
};

export type NestedEnumRoundFilter = {
  equals?: Maybe<Round>;
  in?: Maybe<Array<Round>>;
  not?: Maybe<NestedEnumRoundFilter>;
  notIn?: Maybe<Array<Round>>;
};

export type NestedEnumRoundWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumRoundFilter>;
  _min?: Maybe<NestedEnumRoundFilter>;
  equals?: Maybe<Round>;
  in?: Maybe<Array<Round>>;
  not?: Maybe<NestedEnumRoundWithAggregatesFilter>;
  notIn?: Maybe<Array<Round>>;
};

export type NestedEnumRouteTypeFilter = {
  equals?: Maybe<RouteType>;
  in?: Maybe<Array<RouteType>>;
  not?: Maybe<NestedEnumRouteTypeFilter>;
  notIn?: Maybe<Array<RouteType>>;
};

export type NestedEnumRouteTypeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumRouteTypeFilter>;
  _min?: Maybe<NestedEnumRouteTypeFilter>;
  equals?: Maybe<RouteType>;
  in?: Maybe<Array<RouteType>>;
  not?: Maybe<NestedEnumRouteTypeWithAggregatesFilter>;
  notIn?: Maybe<Array<RouteType>>;
};

export type NestedEnumUserRoleFilter = {
  equals?: Maybe<UserRole>;
  in?: Maybe<Array<UserRole>>;
  not?: Maybe<NestedEnumUserRoleFilter>;
  notIn?: Maybe<Array<UserRole>>;
};

export type NestedEnumUserRoleWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumUserRoleFilter>;
  _min?: Maybe<NestedEnumUserRoleFilter>;
  equals?: Maybe<UserRole>;
  in?: Maybe<Array<UserRole>>;
  not?: Maybe<NestedEnumUserRoleWithAggregatesFilter>;
  notIn?: Maybe<Array<UserRole>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCategory: AggregateCategory;
  aggregateCategoryRound: AggregateCategoryRound;
  aggregateClub: AggregateClub;
  aggregateComment: AggregateComment;
  aggregateCompetition: AggregateCompetition;
  aggregateCompetitionType: AggregateCompetitionType;
  aggregateCompetitor: AggregateCompetitor;
  aggregateCountry: AggregateCountry;
  aggregateGrade: AggregateGrade;
  aggregateLocation: AggregateLocation;
  aggregateRegion: AggregateRegion;
  aggregateRegistration: AggregateRegistration;
  aggregateResult: AggregateResult;
  aggregateRoute: AggregateRoute;
  aggregateScoreBoulder: AggregateScoreBoulder;
  aggregateScoreLead: AggregateScoreLead;
  aggregateScoreSpeed: AggregateScoreSpeed;
  aggregateSeason: AggregateSeason;
  aggregateStartList: AggregateStartList;
  aggregateUser: AggregateUser;
  categories: Array<Category>;
  category?: Maybe<Category>;
  categoryRound?: Maybe<CategoryRound>;
  categoryRounds: Array<CategoryRound>;
  club?: Maybe<Club>;
  clubs: Array<Club>;
  comment?: Maybe<Comment>;
  comments: Array<Comment>;
  competition?: Maybe<Competition>;
  competitionType?: Maybe<CompetitionType>;
  competitionTypes: Array<CompetitionType>;
  competitions: Array<Competition>;
  competitor?: Maybe<Competitor>;
  competitors: Array<Competitor>;
  contextUserInfo: UserInfo;
  countries: Array<Country>;
  country?: Maybe<Country>;
  findFirstCategory?: Maybe<Category>;
  findFirstCategoryRound?: Maybe<CategoryRound>;
  findFirstClub?: Maybe<Club>;
  findFirstComment?: Maybe<Comment>;
  findFirstCompetition?: Maybe<Competition>;
  findFirstCompetitionType?: Maybe<CompetitionType>;
  findFirstCompetitor?: Maybe<Competitor>;
  findFirstCountry?: Maybe<Country>;
  findFirstGrade?: Maybe<Grade>;
  findFirstLocation?: Maybe<Location>;
  findFirstRegion?: Maybe<Region>;
  findFirstRegistration?: Maybe<Registration>;
  findFirstResult?: Maybe<Result>;
  findFirstRoute?: Maybe<Route>;
  findFirstScoreBoulder?: Maybe<ScoreBoulder>;
  findFirstScoreLead?: Maybe<ScoreLead>;
  findFirstScoreSpeed?: Maybe<ScoreSpeed>;
  findFirstSeason?: Maybe<Season>;
  findFirstStartList?: Maybe<StartList>;
  findFirstUser?: Maybe<User>;
  getBoulderCompResults: ResultOutput;
  getCompResults: ResultOutput;
  getCompetitorForScoring: Competitor;
  getLeadCompResults: ResultOutput;
  getLiveCompResults: LiveResultOutput;
  getSpeedCompResults: ResultOutput;
  grade?: Maybe<Grade>;
  grades: Array<Grade>;
  groupByCategory: Array<CategoryGroupBy>;
  groupByCategoryRound: Array<CategoryRoundGroupBy>;
  groupByClub: Array<ClubGroupBy>;
  groupByComment: Array<CommentGroupBy>;
  groupByCompetition: Array<CompetitionGroupBy>;
  groupByCompetitionType: Array<CompetitionTypeGroupBy>;
  groupByCompetitor: Array<CompetitorGroupBy>;
  groupByCountry: Array<CountryGroupBy>;
  groupByGrade: Array<GradeGroupBy>;
  groupByLocation: Array<LocationGroupBy>;
  groupByRegion: Array<RegionGroupBy>;
  groupByRegistration: Array<RegistrationGroupBy>;
  groupByResult: Array<ResultGroupBy>;
  groupByRoute: Array<RouteGroupBy>;
  groupByScoreBoulder: Array<ScoreBoulderGroupBy>;
  groupByScoreLead: Array<ScoreLeadGroupBy>;
  groupByScoreSpeed: Array<ScoreSpeedGroupBy>;
  groupBySeason: Array<SeasonGroupBy>;
  groupByStartList: Array<StartListGroupBy>;
  groupByUser: Array<UserGroupBy>;
  location?: Maybe<Location>;
  locations: Array<Location>;
  region?: Maybe<Region>;
  regions: Array<Region>;
  registration?: Maybe<Registration>;
  registrations: Array<Registration>;
  result?: Maybe<Result>;
  results: Array<Result>;
  route?: Maybe<Route>;
  routes: Array<Route>;
  scoreBoulder?: Maybe<ScoreBoulder>;
  scoreBoulders: Array<ScoreBoulder>;
  scoreLead?: Maybe<ScoreLead>;
  scoreLeads: Array<ScoreLead>;
  scoreSpeed?: Maybe<ScoreSpeed>;
  scoreSpeeds: Array<ScoreSpeed>;
  season?: Maybe<Season>;
  seasons: Array<Season>;
  startList?: Maybe<StartList>;
  startLists: Array<StartList>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryAggregateCategoryArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  orderBy?: Maybe<Array<CategoryOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};

export type QueryAggregateCategoryRoundArgs = {
  cursor?: Maybe<CategoryRoundWhereUniqueInput>;
  orderBy?: Maybe<Array<CategoryRoundOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryRoundWhereInput>;
};

export type QueryAggregateClubArgs = {
  cursor?: Maybe<ClubWhereUniqueInput>;
  orderBy?: Maybe<Array<ClubOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ClubWhereInput>;
};

export type QueryAggregateCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type QueryAggregateCompetitionArgs = {
  cursor?: Maybe<CompetitionWhereUniqueInput>;
  orderBy?: Maybe<Array<CompetitionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitionWhereInput>;
};

export type QueryAggregateCompetitionTypeArgs = {
  cursor?: Maybe<CompetitionTypeWhereUniqueInput>;
  orderBy?: Maybe<Array<CompetitionTypeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitionTypeWhereInput>;
};

export type QueryAggregateCompetitorArgs = {
  cursor?: Maybe<CompetitorWhereUniqueInput>;
  orderBy?: Maybe<Array<CompetitorOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitorWhereInput>;
};

export type QueryAggregateCountryArgs = {
  cursor?: Maybe<CountryWhereUniqueInput>;
  orderBy?: Maybe<Array<CountryOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CountryWhereInput>;
};

export type QueryAggregateGradeArgs = {
  cursor?: Maybe<GradeWhereUniqueInput>;
  orderBy?: Maybe<Array<GradeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GradeWhereInput>;
};

export type QueryAggregateLocationArgs = {
  cursor?: Maybe<LocationWhereUniqueInput>;
  orderBy?: Maybe<Array<LocationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LocationWhereInput>;
};

export type QueryAggregateRegionArgs = {
  cursor?: Maybe<RegionWhereUniqueInput>;
  orderBy?: Maybe<Array<RegionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RegionWhereInput>;
};

export type QueryAggregateRegistrationArgs = {
  cursor?: Maybe<RegistrationWhereUniqueInput>;
  orderBy?: Maybe<Array<RegistrationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RegistrationWhereInput>;
};

export type QueryAggregateResultArgs = {
  cursor?: Maybe<ResultWhereUniqueInput>;
  orderBy?: Maybe<Array<ResultOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ResultWhereInput>;
};

export type QueryAggregateRouteArgs = {
  cursor?: Maybe<RouteWhereUniqueInput>;
  orderBy?: Maybe<Array<RouteOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RouteWhereInput>;
};

export type QueryAggregateScoreBoulderArgs = {
  cursor?: Maybe<ScoreBoulderWhereUniqueInput>;
  orderBy?: Maybe<Array<ScoreBoulderOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreBoulderWhereInput>;
};

export type QueryAggregateScoreLeadArgs = {
  cursor?: Maybe<ScoreLeadWhereUniqueInput>;
  orderBy?: Maybe<Array<ScoreLeadOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreLeadWhereInput>;
};

export type QueryAggregateScoreSpeedArgs = {
  cursor?: Maybe<ScoreSpeedWhereUniqueInput>;
  orderBy?: Maybe<Array<ScoreSpeedOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreSpeedWhereInput>;
};

export type QueryAggregateSeasonArgs = {
  cursor?: Maybe<SeasonWhereUniqueInput>;
  orderBy?: Maybe<Array<SeasonOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SeasonWhereInput>;
};

export type QueryAggregateStartListArgs = {
  cursor?: Maybe<StartListWhereUniqueInput>;
  orderBy?: Maybe<Array<StartListOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StartListWhereInput>;
};

export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type QueryCategoriesArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  distinct?: Maybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: Maybe<Array<CategoryOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};

export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};

export type QueryCategoryRoundArgs = {
  where: CategoryRoundWhereUniqueInput;
};

export type QueryCategoryRoundsArgs = {
  cursor?: Maybe<CategoryRoundWhereUniqueInput>;
  distinct?: Maybe<Array<CategoryRoundScalarFieldEnum>>;
  orderBy?: Maybe<Array<CategoryRoundOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryRoundWhereInput>;
};

export type QueryClubArgs = {
  where: ClubWhereUniqueInput;
};

export type QueryClubsArgs = {
  cursor?: Maybe<ClubWhereUniqueInput>;
  distinct?: Maybe<Array<ClubScalarFieldEnum>>;
  orderBy?: Maybe<Array<ClubOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ClubWhereInput>;
};

export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};

export type QueryCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<Array<CommentScalarFieldEnum>>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type QueryCompetitionArgs = {
  where: CompetitionWhereUniqueInput;
};

export type QueryCompetitionTypeArgs = {
  where: CompetitionTypeWhereUniqueInput;
};

export type QueryCompetitionTypesArgs = {
  cursor?: Maybe<CompetitionTypeWhereUniqueInput>;
  distinct?: Maybe<Array<CompetitionTypeScalarFieldEnum>>;
  orderBy?: Maybe<Array<CompetitionTypeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitionTypeWhereInput>;
};

export type QueryCompetitionsArgs = {
  cursor?: Maybe<CompetitionWhereUniqueInput>;
  distinct?: Maybe<Array<CompetitionScalarFieldEnum>>;
  orderBy?: Maybe<Array<CompetitionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitionWhereInput>;
};

export type QueryCompetitorArgs = {
  where: CompetitorWhereUniqueInput;
};

export type QueryCompetitorsArgs = {
  cursor?: Maybe<CompetitorWhereUniqueInput>;
  distinct?: Maybe<Array<CompetitorScalarFieldEnum>>;
  orderBy?: Maybe<Array<CompetitorOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitorWhereInput>;
};

export type QueryCountriesArgs = {
  cursor?: Maybe<CountryWhereUniqueInput>;
  distinct?: Maybe<Array<CountryScalarFieldEnum>>;
  orderBy?: Maybe<Array<CountryOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CountryWhereInput>;
};

export type QueryCountryArgs = {
  where: CountryWhereUniqueInput;
};

export type QueryFindFirstCategoryArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  distinct?: Maybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: Maybe<Array<CategoryOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};

export type QueryFindFirstCategoryRoundArgs = {
  cursor?: Maybe<CategoryRoundWhereUniqueInput>;
  distinct?: Maybe<Array<CategoryRoundScalarFieldEnum>>;
  orderBy?: Maybe<Array<CategoryRoundOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryRoundWhereInput>;
};

export type QueryFindFirstClubArgs = {
  cursor?: Maybe<ClubWhereUniqueInput>;
  distinct?: Maybe<Array<ClubScalarFieldEnum>>;
  orderBy?: Maybe<Array<ClubOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ClubWhereInput>;
};

export type QueryFindFirstCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<Array<CommentScalarFieldEnum>>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type QueryFindFirstCompetitionArgs = {
  cursor?: Maybe<CompetitionWhereUniqueInput>;
  distinct?: Maybe<Array<CompetitionScalarFieldEnum>>;
  orderBy?: Maybe<Array<CompetitionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitionWhereInput>;
};

export type QueryFindFirstCompetitionTypeArgs = {
  cursor?: Maybe<CompetitionTypeWhereUniqueInput>;
  distinct?: Maybe<Array<CompetitionTypeScalarFieldEnum>>;
  orderBy?: Maybe<Array<CompetitionTypeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitionTypeWhereInput>;
};

export type QueryFindFirstCompetitorArgs = {
  cursor?: Maybe<CompetitorWhereUniqueInput>;
  distinct?: Maybe<Array<CompetitorScalarFieldEnum>>;
  orderBy?: Maybe<Array<CompetitorOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitorWhereInput>;
};

export type QueryFindFirstCountryArgs = {
  cursor?: Maybe<CountryWhereUniqueInput>;
  distinct?: Maybe<Array<CountryScalarFieldEnum>>;
  orderBy?: Maybe<Array<CountryOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CountryWhereInput>;
};

export type QueryFindFirstGradeArgs = {
  cursor?: Maybe<GradeWhereUniqueInput>;
  distinct?: Maybe<Array<GradeScalarFieldEnum>>;
  orderBy?: Maybe<Array<GradeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GradeWhereInput>;
};

export type QueryFindFirstLocationArgs = {
  cursor?: Maybe<LocationWhereUniqueInput>;
  distinct?: Maybe<Array<LocationScalarFieldEnum>>;
  orderBy?: Maybe<Array<LocationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LocationWhereInput>;
};

export type QueryFindFirstRegionArgs = {
  cursor?: Maybe<RegionWhereUniqueInput>;
  distinct?: Maybe<Array<RegionScalarFieldEnum>>;
  orderBy?: Maybe<Array<RegionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RegionWhereInput>;
};

export type QueryFindFirstRegistrationArgs = {
  cursor?: Maybe<RegistrationWhereUniqueInput>;
  distinct?: Maybe<Array<RegistrationScalarFieldEnum>>;
  orderBy?: Maybe<Array<RegistrationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RegistrationWhereInput>;
};

export type QueryFindFirstResultArgs = {
  cursor?: Maybe<ResultWhereUniqueInput>;
  distinct?: Maybe<Array<ResultScalarFieldEnum>>;
  orderBy?: Maybe<Array<ResultOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ResultWhereInput>;
};

export type QueryFindFirstRouteArgs = {
  cursor?: Maybe<RouteWhereUniqueInput>;
  distinct?: Maybe<Array<RouteScalarFieldEnum>>;
  orderBy?: Maybe<Array<RouteOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RouteWhereInput>;
};

export type QueryFindFirstScoreBoulderArgs = {
  cursor?: Maybe<ScoreBoulderWhereUniqueInput>;
  distinct?: Maybe<Array<ScoreBoulderScalarFieldEnum>>;
  orderBy?: Maybe<Array<ScoreBoulderOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreBoulderWhereInput>;
};

export type QueryFindFirstScoreLeadArgs = {
  cursor?: Maybe<ScoreLeadWhereUniqueInput>;
  distinct?: Maybe<Array<ScoreLeadScalarFieldEnum>>;
  orderBy?: Maybe<Array<ScoreLeadOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreLeadWhereInput>;
};

export type QueryFindFirstScoreSpeedArgs = {
  cursor?: Maybe<ScoreSpeedWhereUniqueInput>;
  distinct?: Maybe<Array<ScoreSpeedScalarFieldEnum>>;
  orderBy?: Maybe<Array<ScoreSpeedOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreSpeedWhereInput>;
};

export type QueryFindFirstSeasonArgs = {
  cursor?: Maybe<SeasonWhereUniqueInput>;
  distinct?: Maybe<Array<SeasonScalarFieldEnum>>;
  orderBy?: Maybe<Array<SeasonOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SeasonWhereInput>;
};

export type QueryFindFirstStartListArgs = {
  cursor?: Maybe<StartListWhereUniqueInput>;
  distinct?: Maybe<Array<StartListScalarFieldEnum>>;
  orderBy?: Maybe<Array<StartListOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StartListWhereInput>;
};

export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type QueryGetBoulderCompResultsArgs = {
  data: ResultInput;
};

export type QueryGetCompResultsArgs = {
  data: ResultInput;
};

export type QueryGetCompetitorForScoringArgs = {
  data: FindStartListInput;
};

export type QueryGetLeadCompResultsArgs = {
  data: ResultInput;
};

export type QueryGetSpeedCompResultsArgs = {
  data: ResultInput;
};

export type QueryGradeArgs = {
  where: GradeWhereUniqueInput;
};

export type QueryGradesArgs = {
  cursor?: Maybe<GradeWhereUniqueInput>;
  distinct?: Maybe<Array<GradeScalarFieldEnum>>;
  orderBy?: Maybe<Array<GradeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GradeWhereInput>;
};

export type QueryGroupByCategoryArgs = {
  by: Array<CategoryScalarFieldEnum>;
  having?: Maybe<CategoryScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<CategoryOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};

export type QueryGroupByCategoryRoundArgs = {
  by: Array<CategoryRoundScalarFieldEnum>;
  having?: Maybe<CategoryRoundScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<CategoryRoundOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryRoundWhereInput>;
};

export type QueryGroupByClubArgs = {
  by: Array<ClubScalarFieldEnum>;
  having?: Maybe<ClubScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<ClubOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ClubWhereInput>;
};

export type QueryGroupByCommentArgs = {
  by: Array<CommentScalarFieldEnum>;
  having?: Maybe<CommentScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<CommentOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type QueryGroupByCompetitionArgs = {
  by: Array<CompetitionScalarFieldEnum>;
  having?: Maybe<CompetitionScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<CompetitionOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitionWhereInput>;
};

export type QueryGroupByCompetitionTypeArgs = {
  by: Array<CompetitionTypeScalarFieldEnum>;
  having?: Maybe<CompetitionTypeScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<CompetitionTypeOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitionTypeWhereInput>;
};

export type QueryGroupByCompetitorArgs = {
  by: Array<CompetitorScalarFieldEnum>;
  having?: Maybe<CompetitorScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<CompetitorOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitorWhereInput>;
};

export type QueryGroupByCountryArgs = {
  by: Array<CountryScalarFieldEnum>;
  having?: Maybe<CountryScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<CountryOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CountryWhereInput>;
};

export type QueryGroupByGradeArgs = {
  by: Array<GradeScalarFieldEnum>;
  having?: Maybe<GradeScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<GradeOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GradeWhereInput>;
};

export type QueryGroupByLocationArgs = {
  by: Array<LocationScalarFieldEnum>;
  having?: Maybe<LocationScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<LocationOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LocationWhereInput>;
};

export type QueryGroupByRegionArgs = {
  by: Array<RegionScalarFieldEnum>;
  having?: Maybe<RegionScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<RegionOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RegionWhereInput>;
};

export type QueryGroupByRegistrationArgs = {
  by: Array<RegistrationScalarFieldEnum>;
  having?: Maybe<RegistrationScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<RegistrationOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RegistrationWhereInput>;
};

export type QueryGroupByResultArgs = {
  by: Array<ResultScalarFieldEnum>;
  having?: Maybe<ResultScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<ResultOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ResultWhereInput>;
};

export type QueryGroupByRouteArgs = {
  by: Array<RouteScalarFieldEnum>;
  having?: Maybe<RouteScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<RouteOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RouteWhereInput>;
};

export type QueryGroupByScoreBoulderArgs = {
  by: Array<ScoreBoulderScalarFieldEnum>;
  having?: Maybe<ScoreBoulderScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<ScoreBoulderOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreBoulderWhereInput>;
};

export type QueryGroupByScoreLeadArgs = {
  by: Array<ScoreLeadScalarFieldEnum>;
  having?: Maybe<ScoreLeadScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<ScoreLeadOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreLeadWhereInput>;
};

export type QueryGroupByScoreSpeedArgs = {
  by: Array<ScoreSpeedScalarFieldEnum>;
  having?: Maybe<ScoreSpeedScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<ScoreSpeedOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreSpeedWhereInput>;
};

export type QueryGroupBySeasonArgs = {
  by: Array<SeasonScalarFieldEnum>;
  having?: Maybe<SeasonScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<SeasonOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SeasonWhereInput>;
};

export type QueryGroupByStartListArgs = {
  by: Array<StartListScalarFieldEnum>;
  having?: Maybe<StartListScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<StartListOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StartListWhereInput>;
};

export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: Maybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<UserOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type QueryLocationArgs = {
  where: LocationWhereUniqueInput;
};

export type QueryLocationsArgs = {
  cursor?: Maybe<LocationWhereUniqueInput>;
  distinct?: Maybe<Array<LocationScalarFieldEnum>>;
  orderBy?: Maybe<Array<LocationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LocationWhereInput>;
};

export type QueryRegionArgs = {
  where: RegionWhereUniqueInput;
};

export type QueryRegionsArgs = {
  cursor?: Maybe<RegionWhereUniqueInput>;
  distinct?: Maybe<Array<RegionScalarFieldEnum>>;
  orderBy?: Maybe<Array<RegionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RegionWhereInput>;
};

export type QueryRegistrationArgs = {
  where: RegistrationWhereUniqueInput;
};

export type QueryRegistrationsArgs = {
  cursor?: Maybe<RegistrationWhereUniqueInput>;
  distinct?: Maybe<Array<RegistrationScalarFieldEnum>>;
  orderBy?: Maybe<Array<RegistrationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RegistrationWhereInput>;
};

export type QueryResultArgs = {
  where: ResultWhereUniqueInput;
};

export type QueryResultsArgs = {
  cursor?: Maybe<ResultWhereUniqueInput>;
  distinct?: Maybe<Array<ResultScalarFieldEnum>>;
  orderBy?: Maybe<Array<ResultOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ResultWhereInput>;
};

export type QueryRouteArgs = {
  where: RouteWhereUniqueInput;
};

export type QueryRoutesArgs = {
  cursor?: Maybe<RouteWhereUniqueInput>;
  distinct?: Maybe<Array<RouteScalarFieldEnum>>;
  orderBy?: Maybe<Array<RouteOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RouteWhereInput>;
};

export type QueryScoreBoulderArgs = {
  where: ScoreBoulderWhereUniqueInput;
};

export type QueryScoreBouldersArgs = {
  cursor?: Maybe<ScoreBoulderWhereUniqueInput>;
  distinct?: Maybe<Array<ScoreBoulderScalarFieldEnum>>;
  orderBy?: Maybe<Array<ScoreBoulderOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreBoulderWhereInput>;
};

export type QueryScoreLeadArgs = {
  where: ScoreLeadWhereUniqueInput;
};

export type QueryScoreLeadsArgs = {
  cursor?: Maybe<ScoreLeadWhereUniqueInput>;
  distinct?: Maybe<Array<ScoreLeadScalarFieldEnum>>;
  orderBy?: Maybe<Array<ScoreLeadOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreLeadWhereInput>;
};

export type QueryScoreSpeedArgs = {
  where: ScoreSpeedWhereUniqueInput;
};

export type QueryScoreSpeedsArgs = {
  cursor?: Maybe<ScoreSpeedWhereUniqueInput>;
  distinct?: Maybe<Array<ScoreSpeedScalarFieldEnum>>;
  orderBy?: Maybe<Array<ScoreSpeedOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreSpeedWhereInput>;
};

export type QuerySeasonArgs = {
  where: SeasonWhereUniqueInput;
};

export type QuerySeasonsArgs = {
  cursor?: Maybe<SeasonWhereUniqueInput>;
  distinct?: Maybe<Array<SeasonScalarFieldEnum>>;
  orderBy?: Maybe<Array<SeasonOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SeasonWhereInput>;
};

export type QueryStartListArgs = {
  where: StartListWhereUniqueInput;
};

export type QueryStartListsArgs = {
  cursor?: Maybe<StartListWhereUniqueInput>;
  distinct?: Maybe<Array<StartListScalarFieldEnum>>;
  orderBy?: Maybe<Array<StartListOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StartListWhereInput>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type Region = {
  __typename?: 'Region';
  id: Scalars['Int'];
  locations: Array<Location>;
  name: Scalars['String'];
};

export type RegionLocationsArgs = {
  cursor?: Maybe<LocationWhereUniqueInput>;
  distinct?: Maybe<Array<LocationScalarFieldEnum>>;
  orderBy?: Maybe<Array<LocationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LocationWhereInput>;
};

export type RegionAvgAggregate = {
  __typename?: 'RegionAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type RegionAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type RegionCountAggregate = {
  __typename?: 'RegionCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type RegionCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type RegionCreateInput = {
  locations?: Maybe<LocationCreateNestedManyWithoutRegionInput>;
  name: Scalars['String'];
};

export type RegionCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type RegionCreateNestedOneWithoutLocationsInput = {
  connect?: Maybe<RegionWhereUniqueInput>;
  connectOrCreate?: Maybe<RegionCreateOrConnectWithoutLocationsInput>;
  create?: Maybe<RegionCreateWithoutLocationsInput>;
};

export type RegionCreateOrConnectWithoutLocationsInput = {
  create: RegionCreateWithoutLocationsInput;
  where: RegionWhereUniqueInput;
};

export type RegionCreateWithoutLocationsInput = {
  name: Scalars['String'];
};

export type RegionGroupBy = {
  __typename?: 'RegionGroupBy';
  _avg?: Maybe<RegionAvgAggregate>;
  _count?: Maybe<RegionCountAggregate>;
  _max?: Maybe<RegionMaxAggregate>;
  _min?: Maybe<RegionMinAggregate>;
  _sum?: Maybe<RegionSumAggregate>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type RegionMaxAggregate = {
  __typename?: 'RegionMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type RegionMaxOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type RegionMinAggregate = {
  __typename?: 'RegionMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type RegionMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type RegionOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type RegionOrderByWithAggregationInput = {
  _avg?: Maybe<RegionAvgOrderByAggregateInput>;
  _count?: Maybe<RegionCountOrderByAggregateInput>;
  _max?: Maybe<RegionMaxOrderByAggregateInput>;
  _min?: Maybe<RegionMinOrderByAggregateInput>;
  _sum?: Maybe<RegionSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type RegionRelationFilter = {
  is?: Maybe<RegionWhereInput>;
  isNot?: Maybe<RegionWhereInput>;
};

export enum RegionScalarFieldEnum {
  Id = 'id',
  Name = 'name',
}

export type RegionScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<RegionScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<RegionScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<RegionScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
};

export type RegionSumAggregate = {
  __typename?: 'RegionSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type RegionSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type RegionUpdateInput = {
  locations?: Maybe<LocationUpdateManyWithoutRegionInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RegionUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RegionUpdateOneRequiredWithoutLocationsInput = {
  connect?: Maybe<RegionWhereUniqueInput>;
  connectOrCreate?: Maybe<RegionCreateOrConnectWithoutLocationsInput>;
  create?: Maybe<RegionCreateWithoutLocationsInput>;
  update?: Maybe<RegionUpdateWithoutLocationsInput>;
  upsert?: Maybe<RegionUpsertWithoutLocationsInput>;
};

export type RegionUpdateWithoutLocationsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type RegionUpsertWithoutLocationsInput = {
  create: RegionCreateWithoutLocationsInput;
  update: RegionUpdateWithoutLocationsInput;
};

export type RegionWhereInput = {
  AND?: Maybe<Array<RegionWhereInput>>;
  NOT?: Maybe<Array<RegionWhereInput>>;
  OR?: Maybe<Array<RegionWhereInput>>;
  id?: Maybe<IntFilter>;
  locations?: Maybe<LocationListRelationFilter>;
  name?: Maybe<StringFilter>;
};

export type RegionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type RegisterInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  locationId?: Maybe<Scalars['Float']>;
  password: Scalars['String'];
};

export type Registration = {
  __typename?: 'Registration';
  accepted: Scalars['Boolean'];
  acceptor: User;
  acceptorId: Scalars['Int'];
  competition: Competition;
  competitionId: Scalars['Int'];
  competitor: Competitor;
  competitorId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  paid: Scalars['Boolean'];
  registrant: User;
  registrantId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type RegistrationAvgAggregate = {
  __typename?: 'RegistrationAvgAggregate';
  acceptorId?: Maybe<Scalars['Float']>;
  competitionId?: Maybe<Scalars['Float']>;
  competitorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  registrantId?: Maybe<Scalars['Float']>;
};

export type RegistrationAvgOrderByAggregateInput = {
  acceptorId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  registrantId?: Maybe<SortOrder>;
};

export type RegistrationCountAggregate = {
  __typename?: 'RegistrationCountAggregate';
  _all: Scalars['Int'];
  accepted: Scalars['Int'];
  acceptorId: Scalars['Int'];
  competitionId: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  paid: Scalars['Int'];
  registrantId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type RegistrationCountOrderByAggregateInput = {
  accepted?: Maybe<SortOrder>;
  acceptorId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  paid?: Maybe<SortOrder>;
  registrantId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type RegistrationCreateInput = {
  accepted?: Maybe<Scalars['Boolean']>;
  acceptor: UserCreateNestedOneWithoutAcceptancesInput;
  competition: CompetitionCreateNestedOneWithoutRegistrationsInput;
  competitor: CompetitorCreateNestedOneWithoutRegistrationsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  paid?: Maybe<Scalars['Boolean']>;
  registrant: UserCreateNestedOneWithoutRegistrationsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RegistrationCreateManyAcceptorInput = {
  accepted?: Maybe<Scalars['Boolean']>;
  competitionId: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Boolean']>;
  registrantId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RegistrationCreateManyAcceptorInputEnvelope = {
  data: Array<RegistrationCreateManyAcceptorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RegistrationCreateManyCompetitionInput = {
  accepted?: Maybe<Scalars['Boolean']>;
  acceptorId: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Boolean']>;
  registrantId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RegistrationCreateManyCompetitionInputEnvelope = {
  data: Array<RegistrationCreateManyCompetitionInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RegistrationCreateManyCompetitorInput = {
  accepted?: Maybe<Scalars['Boolean']>;
  acceptorId: Scalars['Int'];
  competitionId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Boolean']>;
  registrantId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RegistrationCreateManyCompetitorInputEnvelope = {
  data: Array<RegistrationCreateManyCompetitorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RegistrationCreateManyInput = {
  accepted?: Maybe<Scalars['Boolean']>;
  acceptorId: Scalars['Int'];
  competitionId: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Boolean']>;
  registrantId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RegistrationCreateManyRegistrantInput = {
  accepted?: Maybe<Scalars['Boolean']>;
  acceptorId: Scalars['Int'];
  competitionId: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RegistrationCreateManyRegistrantInputEnvelope = {
  data: Array<RegistrationCreateManyRegistrantInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RegistrationCreateNestedManyWithoutAcceptorInput = {
  connect?: Maybe<Array<RegistrationWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<RegistrationCreateOrConnectWithoutAcceptorInput>
  >;
  create?: Maybe<Array<RegistrationCreateWithoutAcceptorInput>>;
  createMany?: Maybe<RegistrationCreateManyAcceptorInputEnvelope>;
};

export type RegistrationCreateNestedManyWithoutCompetitionInput = {
  connect?: Maybe<Array<RegistrationWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<RegistrationCreateOrConnectWithoutCompetitionInput>
  >;
  create?: Maybe<Array<RegistrationCreateWithoutCompetitionInput>>;
  createMany?: Maybe<RegistrationCreateManyCompetitionInputEnvelope>;
};

export type RegistrationCreateNestedManyWithoutCompetitorInput = {
  connect?: Maybe<Array<RegistrationWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<RegistrationCreateOrConnectWithoutCompetitorInput>
  >;
  create?: Maybe<Array<RegistrationCreateWithoutCompetitorInput>>;
  createMany?: Maybe<RegistrationCreateManyCompetitorInputEnvelope>;
};

export type RegistrationCreateNestedManyWithoutRegistrantInput = {
  connect?: Maybe<Array<RegistrationWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<RegistrationCreateOrConnectWithoutRegistrantInput>
  >;
  create?: Maybe<Array<RegistrationCreateWithoutRegistrantInput>>;
  createMany?: Maybe<RegistrationCreateManyRegistrantInputEnvelope>;
};

export type RegistrationCreateOrConnectWithoutAcceptorInput = {
  create: RegistrationCreateWithoutAcceptorInput;
  where: RegistrationWhereUniqueInput;
};

export type RegistrationCreateOrConnectWithoutCompetitionInput = {
  create: RegistrationCreateWithoutCompetitionInput;
  where: RegistrationWhereUniqueInput;
};

export type RegistrationCreateOrConnectWithoutCompetitorInput = {
  create: RegistrationCreateWithoutCompetitorInput;
  where: RegistrationWhereUniqueInput;
};

export type RegistrationCreateOrConnectWithoutRegistrantInput = {
  create: RegistrationCreateWithoutRegistrantInput;
  where: RegistrationWhereUniqueInput;
};

export type RegistrationCreateWithoutAcceptorInput = {
  accepted?: Maybe<Scalars['Boolean']>;
  competition: CompetitionCreateNestedOneWithoutRegistrationsInput;
  competitor: CompetitorCreateNestedOneWithoutRegistrationsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  paid?: Maybe<Scalars['Boolean']>;
  registrant: UserCreateNestedOneWithoutRegistrationsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RegistrationCreateWithoutCompetitionInput = {
  accepted?: Maybe<Scalars['Boolean']>;
  acceptor: UserCreateNestedOneWithoutAcceptancesInput;
  competitor: CompetitorCreateNestedOneWithoutRegistrationsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  paid?: Maybe<Scalars['Boolean']>;
  registrant: UserCreateNestedOneWithoutRegistrationsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RegistrationCreateWithoutCompetitorInput = {
  accepted?: Maybe<Scalars['Boolean']>;
  acceptor: UserCreateNestedOneWithoutAcceptancesInput;
  competition: CompetitionCreateNestedOneWithoutRegistrationsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  paid?: Maybe<Scalars['Boolean']>;
  registrant: UserCreateNestedOneWithoutRegistrationsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RegistrationCreateWithoutRegistrantInput = {
  accepted?: Maybe<Scalars['Boolean']>;
  acceptor: UserCreateNestedOneWithoutAcceptancesInput;
  competition: CompetitionCreateNestedOneWithoutRegistrationsInput;
  competitor: CompetitorCreateNestedOneWithoutRegistrationsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  paid?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RegistrationGroupBy = {
  __typename?: 'RegistrationGroupBy';
  _avg?: Maybe<RegistrationAvgAggregate>;
  _count?: Maybe<RegistrationCountAggregate>;
  _max?: Maybe<RegistrationMaxAggregate>;
  _min?: Maybe<RegistrationMinAggregate>;
  _sum?: Maybe<RegistrationSumAggregate>;
  accepted: Scalars['Boolean'];
  acceptorId: Scalars['Int'];
  competitionId: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  paid: Scalars['Boolean'];
  registrantId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type RegistrationListRelationFilter = {
  every?: Maybe<RegistrationWhereInput>;
  none?: Maybe<RegistrationWhereInput>;
  some?: Maybe<RegistrationWhereInput>;
};

export type RegistrationMaxAggregate = {
  __typename?: 'RegistrationMaxAggregate';
  accepted?: Maybe<Scalars['Boolean']>;
  acceptorId?: Maybe<Scalars['Int']>;
  competitionId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Boolean']>;
  registrantId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RegistrationMaxOrderByAggregateInput = {
  accepted?: Maybe<SortOrder>;
  acceptorId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  paid?: Maybe<SortOrder>;
  registrantId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type RegistrationMinAggregate = {
  __typename?: 'RegistrationMinAggregate';
  accepted?: Maybe<Scalars['Boolean']>;
  acceptorId?: Maybe<Scalars['Int']>;
  competitionId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Boolean']>;
  registrantId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RegistrationMinOrderByAggregateInput = {
  accepted?: Maybe<SortOrder>;
  acceptorId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  paid?: Maybe<SortOrder>;
  registrantId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type RegistrationOrderByInput = {
  accepted?: Maybe<SortOrder>;
  acceptorId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  paid?: Maybe<SortOrder>;
  registrantId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type RegistrationOrderByWithAggregationInput = {
  _avg?: Maybe<RegistrationAvgOrderByAggregateInput>;
  _count?: Maybe<RegistrationCountOrderByAggregateInput>;
  _max?: Maybe<RegistrationMaxOrderByAggregateInput>;
  _min?: Maybe<RegistrationMinOrderByAggregateInput>;
  _sum?: Maybe<RegistrationSumOrderByAggregateInput>;
  accepted?: Maybe<SortOrder>;
  acceptorId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  paid?: Maybe<SortOrder>;
  registrantId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum RegistrationScalarFieldEnum {
  Accepted = 'accepted',
  AcceptorId = 'acceptorId',
  CompetitionId = 'competitionId',
  CompetitorId = 'competitorId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Paid = 'paid',
  RegistrantId = 'registrantId',
  UpdatedAt = 'updatedAt',
}

export type RegistrationScalarWhereInput = {
  AND?: Maybe<Array<RegistrationScalarWhereInput>>;
  NOT?: Maybe<Array<RegistrationScalarWhereInput>>;
  OR?: Maybe<Array<RegistrationScalarWhereInput>>;
  accepted?: Maybe<BoolFilter>;
  acceptorId?: Maybe<IntFilter>;
  competitionId?: Maybe<IntFilter>;
  competitorId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  paid?: Maybe<BoolFilter>;
  registrantId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type RegistrationScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<RegistrationScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<RegistrationScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<RegistrationScalarWhereWithAggregatesInput>>;
  accepted?: Maybe<BoolWithAggregatesFilter>;
  acceptorId?: Maybe<IntWithAggregatesFilter>;
  competitionId?: Maybe<IntWithAggregatesFilter>;
  competitorId?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  paid?: Maybe<BoolWithAggregatesFilter>;
  registrantId?: Maybe<IntWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type RegistrationSumAggregate = {
  __typename?: 'RegistrationSumAggregate';
  acceptorId?: Maybe<Scalars['Int']>;
  competitionId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  registrantId?: Maybe<Scalars['Int']>;
};

export type RegistrationSumOrderByAggregateInput = {
  acceptorId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  registrantId?: Maybe<SortOrder>;
};

export type RegistrationUpdateInput = {
  accepted?: Maybe<BoolFieldUpdateOperationsInput>;
  acceptor?: Maybe<UserUpdateOneRequiredWithoutAcceptancesInput>;
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutRegistrationsInput>;
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutRegistrationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  paid?: Maybe<BoolFieldUpdateOperationsInput>;
  registrant?: Maybe<UserUpdateOneRequiredWithoutRegistrationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RegistrationUpdateManyMutationInput = {
  accepted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  paid?: Maybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RegistrationUpdateManyWithWhereWithoutAcceptorInput = {
  data: RegistrationUpdateManyMutationInput;
  where: RegistrationScalarWhereInput;
};

export type RegistrationUpdateManyWithWhereWithoutCompetitionInput = {
  data: RegistrationUpdateManyMutationInput;
  where: RegistrationScalarWhereInput;
};

export type RegistrationUpdateManyWithWhereWithoutCompetitorInput = {
  data: RegistrationUpdateManyMutationInput;
  where: RegistrationScalarWhereInput;
};

export type RegistrationUpdateManyWithWhereWithoutRegistrantInput = {
  data: RegistrationUpdateManyMutationInput;
  where: RegistrationScalarWhereInput;
};

export type RegistrationUpdateManyWithoutAcceptorInput = {
  connect?: Maybe<Array<RegistrationWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<RegistrationCreateOrConnectWithoutAcceptorInput>
  >;
  create?: Maybe<Array<RegistrationCreateWithoutAcceptorInput>>;
  createMany?: Maybe<RegistrationCreateManyAcceptorInputEnvelope>;
  delete?: Maybe<Array<RegistrationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<RegistrationScalarWhereInput>>;
  disconnect?: Maybe<Array<RegistrationWhereUniqueInput>>;
  set?: Maybe<Array<RegistrationWhereUniqueInput>>;
  update?: Maybe<Array<RegistrationUpdateWithWhereUniqueWithoutAcceptorInput>>;
  updateMany?: Maybe<
    Array<RegistrationUpdateManyWithWhereWithoutAcceptorInput>
  >;
  upsert?: Maybe<Array<RegistrationUpsertWithWhereUniqueWithoutAcceptorInput>>;
};

export type RegistrationUpdateManyWithoutCompetitionInput = {
  connect?: Maybe<Array<RegistrationWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<RegistrationCreateOrConnectWithoutCompetitionInput>
  >;
  create?: Maybe<Array<RegistrationCreateWithoutCompetitionInput>>;
  createMany?: Maybe<RegistrationCreateManyCompetitionInputEnvelope>;
  delete?: Maybe<Array<RegistrationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<RegistrationScalarWhereInput>>;
  disconnect?: Maybe<Array<RegistrationWhereUniqueInput>>;
  set?: Maybe<Array<RegistrationWhereUniqueInput>>;
  update?: Maybe<
    Array<RegistrationUpdateWithWhereUniqueWithoutCompetitionInput>
  >;
  updateMany?: Maybe<
    Array<RegistrationUpdateManyWithWhereWithoutCompetitionInput>
  >;
  upsert?: Maybe<
    Array<RegistrationUpsertWithWhereUniqueWithoutCompetitionInput>
  >;
};

export type RegistrationUpdateManyWithoutCompetitorInput = {
  connect?: Maybe<Array<RegistrationWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<RegistrationCreateOrConnectWithoutCompetitorInput>
  >;
  create?: Maybe<Array<RegistrationCreateWithoutCompetitorInput>>;
  createMany?: Maybe<RegistrationCreateManyCompetitorInputEnvelope>;
  delete?: Maybe<Array<RegistrationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<RegistrationScalarWhereInput>>;
  disconnect?: Maybe<Array<RegistrationWhereUniqueInput>>;
  set?: Maybe<Array<RegistrationWhereUniqueInput>>;
  update?: Maybe<
    Array<RegistrationUpdateWithWhereUniqueWithoutCompetitorInput>
  >;
  updateMany?: Maybe<
    Array<RegistrationUpdateManyWithWhereWithoutCompetitorInput>
  >;
  upsert?: Maybe<
    Array<RegistrationUpsertWithWhereUniqueWithoutCompetitorInput>
  >;
};

export type RegistrationUpdateManyWithoutRegistrantInput = {
  connect?: Maybe<Array<RegistrationWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<RegistrationCreateOrConnectWithoutRegistrantInput>
  >;
  create?: Maybe<Array<RegistrationCreateWithoutRegistrantInput>>;
  createMany?: Maybe<RegistrationCreateManyRegistrantInputEnvelope>;
  delete?: Maybe<Array<RegistrationWhereUniqueInput>>;
  deleteMany?: Maybe<Array<RegistrationScalarWhereInput>>;
  disconnect?: Maybe<Array<RegistrationWhereUniqueInput>>;
  set?: Maybe<Array<RegistrationWhereUniqueInput>>;
  update?: Maybe<
    Array<RegistrationUpdateWithWhereUniqueWithoutRegistrantInput>
  >;
  updateMany?: Maybe<
    Array<RegistrationUpdateManyWithWhereWithoutRegistrantInput>
  >;
  upsert?: Maybe<
    Array<RegistrationUpsertWithWhereUniqueWithoutRegistrantInput>
  >;
};

export type RegistrationUpdateWithWhereUniqueWithoutAcceptorInput = {
  data: RegistrationUpdateWithoutAcceptorInput;
  where: RegistrationWhereUniqueInput;
};

export type RegistrationUpdateWithWhereUniqueWithoutCompetitionInput = {
  data: RegistrationUpdateWithoutCompetitionInput;
  where: RegistrationWhereUniqueInput;
};

export type RegistrationUpdateWithWhereUniqueWithoutCompetitorInput = {
  data: RegistrationUpdateWithoutCompetitorInput;
  where: RegistrationWhereUniqueInput;
};

export type RegistrationUpdateWithWhereUniqueWithoutRegistrantInput = {
  data: RegistrationUpdateWithoutRegistrantInput;
  where: RegistrationWhereUniqueInput;
};

export type RegistrationUpdateWithoutAcceptorInput = {
  accepted?: Maybe<BoolFieldUpdateOperationsInput>;
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutRegistrationsInput>;
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutRegistrationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  paid?: Maybe<BoolFieldUpdateOperationsInput>;
  registrant?: Maybe<UserUpdateOneRequiredWithoutRegistrationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RegistrationUpdateWithoutCompetitionInput = {
  accepted?: Maybe<BoolFieldUpdateOperationsInput>;
  acceptor?: Maybe<UserUpdateOneRequiredWithoutAcceptancesInput>;
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutRegistrationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  paid?: Maybe<BoolFieldUpdateOperationsInput>;
  registrant?: Maybe<UserUpdateOneRequiredWithoutRegistrationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RegistrationUpdateWithoutCompetitorInput = {
  accepted?: Maybe<BoolFieldUpdateOperationsInput>;
  acceptor?: Maybe<UserUpdateOneRequiredWithoutAcceptancesInput>;
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutRegistrationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  paid?: Maybe<BoolFieldUpdateOperationsInput>;
  registrant?: Maybe<UserUpdateOneRequiredWithoutRegistrationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RegistrationUpdateWithoutRegistrantInput = {
  accepted?: Maybe<BoolFieldUpdateOperationsInput>;
  acceptor?: Maybe<UserUpdateOneRequiredWithoutAcceptancesInput>;
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutRegistrationsInput>;
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutRegistrationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  paid?: Maybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RegistrationUpsertWithWhereUniqueWithoutAcceptorInput = {
  create: RegistrationCreateWithoutAcceptorInput;
  update: RegistrationUpdateWithoutAcceptorInput;
  where: RegistrationWhereUniqueInput;
};

export type RegistrationUpsertWithWhereUniqueWithoutCompetitionInput = {
  create: RegistrationCreateWithoutCompetitionInput;
  update: RegistrationUpdateWithoutCompetitionInput;
  where: RegistrationWhereUniqueInput;
};

export type RegistrationUpsertWithWhereUniqueWithoutCompetitorInput = {
  create: RegistrationCreateWithoutCompetitorInput;
  update: RegistrationUpdateWithoutCompetitorInput;
  where: RegistrationWhereUniqueInput;
};

export type RegistrationUpsertWithWhereUniqueWithoutRegistrantInput = {
  create: RegistrationCreateWithoutRegistrantInput;
  update: RegistrationUpdateWithoutRegistrantInput;
  where: RegistrationWhereUniqueInput;
};

export type RegistrationWhereInput = {
  AND?: Maybe<Array<RegistrationWhereInput>>;
  NOT?: Maybe<Array<RegistrationWhereInput>>;
  OR?: Maybe<Array<RegistrationWhereInput>>;
  accepted?: Maybe<BoolFilter>;
  acceptor?: Maybe<UserRelationFilter>;
  acceptorId?: Maybe<IntFilter>;
  competition?: Maybe<CompetitionRelationFilter>;
  competitionId?: Maybe<IntFilter>;
  competitor?: Maybe<CompetitorRelationFilter>;
  competitorId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  paid?: Maybe<BoolFilter>;
  registrant?: Maybe<UserRelationFilter>;
  registrantId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type RegistrationWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Result = {
  __typename?: 'Result';
  approvedBy: User;
  approvedById: Scalars['Int'];
  competition: Competition;
  competitionId: Scalars['Int'];
  competitor: Competitor;
  competitorId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  score: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ResultAvgAggregate = {
  __typename?: 'ResultAvgAggregate';
  approvedById?: Maybe<Scalars['Float']>;
  competitionId?: Maybe<Scalars['Float']>;
  competitorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type ResultAvgOrderByAggregateInput = {
  approvedById?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  score?: Maybe<SortOrder>;
};

export type ResultCountAggregate = {
  __typename?: 'ResultCountAggregate';
  _all: Scalars['Int'];
  approvedById: Scalars['Int'];
  competitionId: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  score: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ResultCountOrderByAggregateInput = {
  approvedById?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  score?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ResultCreateInput = {
  approvedBy: UserCreateNestedOneWithoutResultsInput;
  competition: CompetitionCreateNestedOneWithoutResultsInput;
  competitor: CompetitorCreateNestedOneWithoutResultsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  score: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResultCreateManyApprovedByInput = {
  competitionId: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  score: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResultCreateManyApprovedByInputEnvelope = {
  data: Array<ResultCreateManyApprovedByInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ResultCreateManyCompetitionInput = {
  approvedById: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  score: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResultCreateManyCompetitionInputEnvelope = {
  data: Array<ResultCreateManyCompetitionInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ResultCreateManyCompetitorInput = {
  approvedById: Scalars['Int'];
  competitionId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  score: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResultCreateManyCompetitorInputEnvelope = {
  data: Array<ResultCreateManyCompetitorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ResultCreateManyInput = {
  approvedById: Scalars['Int'];
  competitionId: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  score: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResultCreateNestedManyWithoutApprovedByInput = {
  connect?: Maybe<Array<ResultWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ResultCreateOrConnectWithoutApprovedByInput>>;
  create?: Maybe<Array<ResultCreateWithoutApprovedByInput>>;
  createMany?: Maybe<ResultCreateManyApprovedByInputEnvelope>;
};

export type ResultCreateNestedManyWithoutCompetitionInput = {
  connect?: Maybe<Array<ResultWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ResultCreateOrConnectWithoutCompetitionInput>>;
  create?: Maybe<Array<ResultCreateWithoutCompetitionInput>>;
  createMany?: Maybe<ResultCreateManyCompetitionInputEnvelope>;
};

export type ResultCreateNestedManyWithoutCompetitorInput = {
  connect?: Maybe<Array<ResultWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ResultCreateOrConnectWithoutCompetitorInput>>;
  create?: Maybe<Array<ResultCreateWithoutCompetitorInput>>;
  createMany?: Maybe<ResultCreateManyCompetitorInputEnvelope>;
};

export type ResultCreateOrConnectWithoutApprovedByInput = {
  create: ResultCreateWithoutApprovedByInput;
  where: ResultWhereUniqueInput;
};

export type ResultCreateOrConnectWithoutCompetitionInput = {
  create: ResultCreateWithoutCompetitionInput;
  where: ResultWhereUniqueInput;
};

export type ResultCreateOrConnectWithoutCompetitorInput = {
  create: ResultCreateWithoutCompetitorInput;
  where: ResultWhereUniqueInput;
};

export type ResultCreateWithoutApprovedByInput = {
  competition: CompetitionCreateNestedOneWithoutResultsInput;
  competitor: CompetitorCreateNestedOneWithoutResultsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  score: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResultCreateWithoutCompetitionInput = {
  approvedBy: UserCreateNestedOneWithoutResultsInput;
  competitor: CompetitorCreateNestedOneWithoutResultsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  score: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResultCreateWithoutCompetitorInput = {
  approvedBy: UserCreateNestedOneWithoutResultsInput;
  competition: CompetitionCreateNestedOneWithoutResultsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  score: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResultField = {
  __typename?: 'ResultField';
  competitor: Competitor;
  rank: Scalars['Float'];
  rounds: Array<ResultRound>;
};

export type ResultGroupBy = {
  __typename?: 'ResultGroupBy';
  _avg?: Maybe<ResultAvgAggregate>;
  _count?: Maybe<ResultCountAggregate>;
  _max?: Maybe<ResultMaxAggregate>;
  _min?: Maybe<ResultMinAggregate>;
  _sum?: Maybe<ResultSumAggregate>;
  approvedById: Scalars['Int'];
  competitionId: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  score: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ResultInput = {
  categoryId: Scalars['Float'];
  competitionId: Scalars['Float'];
  competitionType?: Maybe<Scalars['String']>;
};

export type ResultListRelationFilter = {
  every?: Maybe<ResultWhereInput>;
  none?: Maybe<ResultWhereInput>;
  some?: Maybe<ResultWhereInput>;
};

export type ResultMaxAggregate = {
  __typename?: 'ResultMaxAggregate';
  approvedById?: Maybe<Scalars['Int']>;
  competitionId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResultMaxOrderByAggregateInput = {
  approvedById?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  score?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ResultMinAggregate = {
  __typename?: 'ResultMinAggregate';
  approvedById?: Maybe<Scalars['Int']>;
  competitionId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResultMinOrderByAggregateInput = {
  approvedById?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  score?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ResultOrderByInput = {
  approvedById?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  score?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ResultOrderByWithAggregationInput = {
  _avg?: Maybe<ResultAvgOrderByAggregateInput>;
  _count?: Maybe<ResultCountOrderByAggregateInput>;
  _max?: Maybe<ResultMaxOrderByAggregateInput>;
  _min?: Maybe<ResultMinOrderByAggregateInput>;
  _sum?: Maybe<ResultSumOrderByAggregateInput>;
  approvedById?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  score?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ResultOutput = {
  __typename?: 'ResultOutput';
  results: Array<ResultField>;
};

export type ResultRound = {
  __typename?: 'ResultRound';
  name: Scalars['String'];
  rank: Scalars['Float'];
  score: Scalars['String'];
};

export enum ResultScalarFieldEnum {
  ApprovedById = 'approvedById',
  CompetitionId = 'competitionId',
  CompetitorId = 'competitorId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Score = 'score',
  UpdatedAt = 'updatedAt',
}

export type ResultScalarWhereInput = {
  AND?: Maybe<Array<ResultScalarWhereInput>>;
  NOT?: Maybe<Array<ResultScalarWhereInput>>;
  OR?: Maybe<Array<ResultScalarWhereInput>>;
  approvedById?: Maybe<IntFilter>;
  competitionId?: Maybe<IntFilter>;
  competitorId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  score?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ResultScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ResultScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ResultScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ResultScalarWhereWithAggregatesInput>>;
  approvedById?: Maybe<IntWithAggregatesFilter>;
  competitionId?: Maybe<IntWithAggregatesFilter>;
  competitorId?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  score?: Maybe<IntWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type ResultSumAggregate = {
  __typename?: 'ResultSumAggregate';
  approvedById?: Maybe<Scalars['Int']>;
  competitionId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
};

export type ResultSumOrderByAggregateInput = {
  approvedById?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  score?: Maybe<SortOrder>;
};

export type ResultUpdateInput = {
  approvedBy?: Maybe<UserUpdateOneRequiredWithoutResultsInput>;
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutResultsInput>;
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutResultsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  score?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ResultUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  score?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ResultUpdateManyWithWhereWithoutApprovedByInput = {
  data: ResultUpdateManyMutationInput;
  where: ResultScalarWhereInput;
};

export type ResultUpdateManyWithWhereWithoutCompetitionInput = {
  data: ResultUpdateManyMutationInput;
  where: ResultScalarWhereInput;
};

export type ResultUpdateManyWithWhereWithoutCompetitorInput = {
  data: ResultUpdateManyMutationInput;
  where: ResultScalarWhereInput;
};

export type ResultUpdateManyWithoutApprovedByInput = {
  connect?: Maybe<Array<ResultWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ResultCreateOrConnectWithoutApprovedByInput>>;
  create?: Maybe<Array<ResultCreateWithoutApprovedByInput>>;
  createMany?: Maybe<ResultCreateManyApprovedByInputEnvelope>;
  delete?: Maybe<Array<ResultWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ResultScalarWhereInput>>;
  disconnect?: Maybe<Array<ResultWhereUniqueInput>>;
  set?: Maybe<Array<ResultWhereUniqueInput>>;
  update?: Maybe<Array<ResultUpdateWithWhereUniqueWithoutApprovedByInput>>;
  updateMany?: Maybe<Array<ResultUpdateManyWithWhereWithoutApprovedByInput>>;
  upsert?: Maybe<Array<ResultUpsertWithWhereUniqueWithoutApprovedByInput>>;
};

export type ResultUpdateManyWithoutCompetitionInput = {
  connect?: Maybe<Array<ResultWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ResultCreateOrConnectWithoutCompetitionInput>>;
  create?: Maybe<Array<ResultCreateWithoutCompetitionInput>>;
  createMany?: Maybe<ResultCreateManyCompetitionInputEnvelope>;
  delete?: Maybe<Array<ResultWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ResultScalarWhereInput>>;
  disconnect?: Maybe<Array<ResultWhereUniqueInput>>;
  set?: Maybe<Array<ResultWhereUniqueInput>>;
  update?: Maybe<Array<ResultUpdateWithWhereUniqueWithoutCompetitionInput>>;
  updateMany?: Maybe<Array<ResultUpdateManyWithWhereWithoutCompetitionInput>>;
  upsert?: Maybe<Array<ResultUpsertWithWhereUniqueWithoutCompetitionInput>>;
};

export type ResultUpdateManyWithoutCompetitorInput = {
  connect?: Maybe<Array<ResultWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ResultCreateOrConnectWithoutCompetitorInput>>;
  create?: Maybe<Array<ResultCreateWithoutCompetitorInput>>;
  createMany?: Maybe<ResultCreateManyCompetitorInputEnvelope>;
  delete?: Maybe<Array<ResultWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ResultScalarWhereInput>>;
  disconnect?: Maybe<Array<ResultWhereUniqueInput>>;
  set?: Maybe<Array<ResultWhereUniqueInput>>;
  update?: Maybe<Array<ResultUpdateWithWhereUniqueWithoutCompetitorInput>>;
  updateMany?: Maybe<Array<ResultUpdateManyWithWhereWithoutCompetitorInput>>;
  upsert?: Maybe<Array<ResultUpsertWithWhereUniqueWithoutCompetitorInput>>;
};

export type ResultUpdateWithWhereUniqueWithoutApprovedByInput = {
  data: ResultUpdateWithoutApprovedByInput;
  where: ResultWhereUniqueInput;
};

export type ResultUpdateWithWhereUniqueWithoutCompetitionInput = {
  data: ResultUpdateWithoutCompetitionInput;
  where: ResultWhereUniqueInput;
};

export type ResultUpdateWithWhereUniqueWithoutCompetitorInput = {
  data: ResultUpdateWithoutCompetitorInput;
  where: ResultWhereUniqueInput;
};

export type ResultUpdateWithoutApprovedByInput = {
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutResultsInput>;
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutResultsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  score?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ResultUpdateWithoutCompetitionInput = {
  approvedBy?: Maybe<UserUpdateOneRequiredWithoutResultsInput>;
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutResultsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  score?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ResultUpdateWithoutCompetitorInput = {
  approvedBy?: Maybe<UserUpdateOneRequiredWithoutResultsInput>;
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutResultsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  score?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ResultUpsertWithWhereUniqueWithoutApprovedByInput = {
  create: ResultCreateWithoutApprovedByInput;
  update: ResultUpdateWithoutApprovedByInput;
  where: ResultWhereUniqueInput;
};

export type ResultUpsertWithWhereUniqueWithoutCompetitionInput = {
  create: ResultCreateWithoutCompetitionInput;
  update: ResultUpdateWithoutCompetitionInput;
  where: ResultWhereUniqueInput;
};

export type ResultUpsertWithWhereUniqueWithoutCompetitorInput = {
  create: ResultCreateWithoutCompetitorInput;
  update: ResultUpdateWithoutCompetitorInput;
  where: ResultWhereUniqueInput;
};

export type ResultWhereInput = {
  AND?: Maybe<Array<ResultWhereInput>>;
  NOT?: Maybe<Array<ResultWhereInput>>;
  OR?: Maybe<Array<ResultWhereInput>>;
  approvedBy?: Maybe<UserRelationFilter>;
  approvedById?: Maybe<IntFilter>;
  competition?: Maybe<CompetitionRelationFilter>;
  competitionId?: Maybe<IntFilter>;
  competitor?: Maybe<CompetitorRelationFilter>;
  competitorId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  score?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ResultWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum Round {
  Final = 'FINAL',
  Qualification = 'QUALIFICATION',
  SemiFinal = 'SEMI_FINAL',
}

export type Route = {
  __typename?: 'Route';
  active: Scalars['Boolean'];
  category: Category;
  categoryId: Scalars['Int'];
  competition: Competition;
  competitionId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  grade: Grade;
  gradeId: Scalars['Int'];
  id: Scalars['Int'];
  judge: User;
  judgeId: Scalars['Int'];
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  scoreBoulder: Array<ScoreBoulder>;
  scoreLead: Array<ScoreLead>;
  scoreSpeed: Array<ScoreSpeed>;
  setter: User;
  setterId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type RouteScoreBoulderArgs = {
  cursor?: Maybe<ScoreBoulderWhereUniqueInput>;
  distinct?: Maybe<Array<ScoreBoulderScalarFieldEnum>>;
  orderBy?: Maybe<Array<ScoreBoulderOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreBoulderWhereInput>;
};

export type RouteScoreLeadArgs = {
  cursor?: Maybe<ScoreLeadWhereUniqueInput>;
  distinct?: Maybe<Array<ScoreLeadScalarFieldEnum>>;
  orderBy?: Maybe<Array<ScoreLeadOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreLeadWhereInput>;
};

export type RouteScoreSpeedArgs = {
  cursor?: Maybe<ScoreSpeedWhereUniqueInput>;
  distinct?: Maybe<Array<ScoreSpeedScalarFieldEnum>>;
  orderBy?: Maybe<Array<ScoreSpeedOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ScoreSpeedWhereInput>;
};

export type RouteAvgAggregate = {
  __typename?: 'RouteAvgAggregate';
  categoryId?: Maybe<Scalars['Float']>;
  competitionId?: Maybe<Scalars['Float']>;
  gradeId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  judgeId?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['Float']>;
  setterId?: Maybe<Scalars['Float']>;
};

export type RouteAvgOrderByAggregateInput = {
  categoryId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  gradeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  judgeId?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
  setterId?: Maybe<SortOrder>;
};

export type RouteCountAggregate = {
  __typename?: 'RouteCountAggregate';
  _all: Scalars['Int'];
  active: Scalars['Int'];
  categoryId: Scalars['Int'];
  competitionId: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  gradeId: Scalars['Int'];
  id: Scalars['Int'];
  judgeId: Scalars['Int'];
  name: Scalars['Int'];
  number: Scalars['Int'];
  round: Scalars['Int'];
  routeType: Scalars['Int'];
  setterId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type RouteCountOrderByAggregateInput = {
  active?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  gradeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  judgeId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
  round?: Maybe<SortOrder>;
  routeType?: Maybe<SortOrder>;
  setterId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type RouteCreateInput = {
  active?: Maybe<Scalars['Boolean']>;
  category: CategoryCreateNestedOneWithoutRoutesInput;
  competition: CompetitionCreateNestedOneWithoutRoutesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  grade: GradeCreateNestedOneWithoutRoutesInput;
  judge: UserCreateNestedOneWithoutRoutesJudgedInput;
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  scoreBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutRouteInput>;
  scoreLead?: Maybe<ScoreLeadCreateNestedManyWithoutRouteInput>;
  scoreSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutRouteInput>;
  setter: UserCreateNestedOneWithoutRoutesSetInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteCreateManyCategoryInput = {
  active?: Maybe<Scalars['Boolean']>;
  competitionId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  gradeId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  judgeId: Scalars['Int'];
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  setterId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteCreateManyCategoryInputEnvelope = {
  data: Array<RouteCreateManyCategoryInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RouteCreateManyCompetitionInput = {
  active?: Maybe<Scalars['Boolean']>;
  categoryId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  gradeId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  judgeId: Scalars['Int'];
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  setterId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteCreateManyCompetitionInputEnvelope = {
  data: Array<RouteCreateManyCompetitionInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RouteCreateManyGradeInput = {
  active?: Maybe<Scalars['Boolean']>;
  categoryId: Scalars['Int'];
  competitionId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  judgeId: Scalars['Int'];
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  setterId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteCreateManyGradeInputEnvelope = {
  data: Array<RouteCreateManyGradeInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RouteCreateManyInput = {
  active?: Maybe<Scalars['Boolean']>;
  categoryId: Scalars['Int'];
  competitionId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  gradeId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  judgeId: Scalars['Int'];
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  setterId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteCreateManyJudgeInput = {
  active?: Maybe<Scalars['Boolean']>;
  categoryId: Scalars['Int'];
  competitionId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  gradeId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  setterId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteCreateManyJudgeInputEnvelope = {
  data: Array<RouteCreateManyJudgeInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RouteCreateManySetterInput = {
  active?: Maybe<Scalars['Boolean']>;
  categoryId: Scalars['Int'];
  competitionId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  gradeId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  judgeId: Scalars['Int'];
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteCreateManySetterInputEnvelope = {
  data: Array<RouteCreateManySetterInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RouteCreateNestedManyWithoutCategoryInput = {
  connect?: Maybe<Array<RouteWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RouteCreateOrConnectWithoutCategoryInput>>;
  create?: Maybe<Array<RouteCreateWithoutCategoryInput>>;
  createMany?: Maybe<RouteCreateManyCategoryInputEnvelope>;
};

export type RouteCreateNestedManyWithoutCompetitionInput = {
  connect?: Maybe<Array<RouteWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RouteCreateOrConnectWithoutCompetitionInput>>;
  create?: Maybe<Array<RouteCreateWithoutCompetitionInput>>;
  createMany?: Maybe<RouteCreateManyCompetitionInputEnvelope>;
};

export type RouteCreateNestedManyWithoutGradeInput = {
  connect?: Maybe<Array<RouteWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RouteCreateOrConnectWithoutGradeInput>>;
  create?: Maybe<Array<RouteCreateWithoutGradeInput>>;
  createMany?: Maybe<RouteCreateManyGradeInputEnvelope>;
};

export type RouteCreateNestedManyWithoutJudgeInput = {
  connect?: Maybe<Array<RouteWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RouteCreateOrConnectWithoutJudgeInput>>;
  create?: Maybe<Array<RouteCreateWithoutJudgeInput>>;
  createMany?: Maybe<RouteCreateManyJudgeInputEnvelope>;
};

export type RouteCreateNestedManyWithoutSetterInput = {
  connect?: Maybe<Array<RouteWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RouteCreateOrConnectWithoutSetterInput>>;
  create?: Maybe<Array<RouteCreateWithoutSetterInput>>;
  createMany?: Maybe<RouteCreateManySetterInputEnvelope>;
};

export type RouteCreateNestedOneWithoutScoreBoulderInput = {
  connect?: Maybe<RouteWhereUniqueInput>;
  connectOrCreate?: Maybe<RouteCreateOrConnectWithoutScoreBoulderInput>;
  create?: Maybe<RouteCreateWithoutScoreBoulderInput>;
};

export type RouteCreateNestedOneWithoutScoreLeadInput = {
  connect?: Maybe<RouteWhereUniqueInput>;
  connectOrCreate?: Maybe<RouteCreateOrConnectWithoutScoreLeadInput>;
  create?: Maybe<RouteCreateWithoutScoreLeadInput>;
};

export type RouteCreateNestedOneWithoutScoreSpeedInput = {
  connect?: Maybe<RouteWhereUniqueInput>;
  connectOrCreate?: Maybe<RouteCreateOrConnectWithoutScoreSpeedInput>;
  create?: Maybe<RouteCreateWithoutScoreSpeedInput>;
};

export type RouteCreateOrConnectWithoutCategoryInput = {
  create: RouteCreateWithoutCategoryInput;
  where: RouteWhereUniqueInput;
};

export type RouteCreateOrConnectWithoutCompetitionInput = {
  create: RouteCreateWithoutCompetitionInput;
  where: RouteWhereUniqueInput;
};

export type RouteCreateOrConnectWithoutGradeInput = {
  create: RouteCreateWithoutGradeInput;
  where: RouteWhereUniqueInput;
};

export type RouteCreateOrConnectWithoutJudgeInput = {
  create: RouteCreateWithoutJudgeInput;
  where: RouteWhereUniqueInput;
};

export type RouteCreateOrConnectWithoutScoreBoulderInput = {
  create: RouteCreateWithoutScoreBoulderInput;
  where: RouteWhereUniqueInput;
};

export type RouteCreateOrConnectWithoutScoreLeadInput = {
  create: RouteCreateWithoutScoreLeadInput;
  where: RouteWhereUniqueInput;
};

export type RouteCreateOrConnectWithoutScoreSpeedInput = {
  create: RouteCreateWithoutScoreSpeedInput;
  where: RouteWhereUniqueInput;
};

export type RouteCreateOrConnectWithoutSetterInput = {
  create: RouteCreateWithoutSetterInput;
  where: RouteWhereUniqueInput;
};

export type RouteCreateWithoutCategoryInput = {
  active?: Maybe<Scalars['Boolean']>;
  competition: CompetitionCreateNestedOneWithoutRoutesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  grade: GradeCreateNestedOneWithoutRoutesInput;
  judge: UserCreateNestedOneWithoutRoutesJudgedInput;
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  scoreBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutRouteInput>;
  scoreLead?: Maybe<ScoreLeadCreateNestedManyWithoutRouteInput>;
  scoreSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutRouteInput>;
  setter: UserCreateNestedOneWithoutRoutesSetInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteCreateWithoutCompetitionInput = {
  active?: Maybe<Scalars['Boolean']>;
  category: CategoryCreateNestedOneWithoutRoutesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  grade: GradeCreateNestedOneWithoutRoutesInput;
  judge: UserCreateNestedOneWithoutRoutesJudgedInput;
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  scoreBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutRouteInput>;
  scoreLead?: Maybe<ScoreLeadCreateNestedManyWithoutRouteInput>;
  scoreSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutRouteInput>;
  setter: UserCreateNestedOneWithoutRoutesSetInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteCreateWithoutGradeInput = {
  active?: Maybe<Scalars['Boolean']>;
  category: CategoryCreateNestedOneWithoutRoutesInput;
  competition: CompetitionCreateNestedOneWithoutRoutesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  judge: UserCreateNestedOneWithoutRoutesJudgedInput;
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  scoreBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutRouteInput>;
  scoreLead?: Maybe<ScoreLeadCreateNestedManyWithoutRouteInput>;
  scoreSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutRouteInput>;
  setter: UserCreateNestedOneWithoutRoutesSetInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteCreateWithoutJudgeInput = {
  active?: Maybe<Scalars['Boolean']>;
  category: CategoryCreateNestedOneWithoutRoutesInput;
  competition: CompetitionCreateNestedOneWithoutRoutesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  grade: GradeCreateNestedOneWithoutRoutesInput;
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  scoreBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutRouteInput>;
  scoreLead?: Maybe<ScoreLeadCreateNestedManyWithoutRouteInput>;
  scoreSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutRouteInput>;
  setter: UserCreateNestedOneWithoutRoutesSetInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteCreateWithoutScoreBoulderInput = {
  active?: Maybe<Scalars['Boolean']>;
  category: CategoryCreateNestedOneWithoutRoutesInput;
  competition: CompetitionCreateNestedOneWithoutRoutesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  grade: GradeCreateNestedOneWithoutRoutesInput;
  judge: UserCreateNestedOneWithoutRoutesJudgedInput;
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  scoreLead?: Maybe<ScoreLeadCreateNestedManyWithoutRouteInput>;
  scoreSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutRouteInput>;
  setter: UserCreateNestedOneWithoutRoutesSetInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteCreateWithoutScoreLeadInput = {
  active?: Maybe<Scalars['Boolean']>;
  category: CategoryCreateNestedOneWithoutRoutesInput;
  competition: CompetitionCreateNestedOneWithoutRoutesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  grade: GradeCreateNestedOneWithoutRoutesInput;
  judge: UserCreateNestedOneWithoutRoutesJudgedInput;
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  scoreBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutRouteInput>;
  scoreSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutRouteInput>;
  setter: UserCreateNestedOneWithoutRoutesSetInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteCreateWithoutScoreSpeedInput = {
  active?: Maybe<Scalars['Boolean']>;
  category: CategoryCreateNestedOneWithoutRoutesInput;
  competition: CompetitionCreateNestedOneWithoutRoutesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  grade: GradeCreateNestedOneWithoutRoutesInput;
  judge: UserCreateNestedOneWithoutRoutesJudgedInput;
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  scoreBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutRouteInput>;
  scoreLead?: Maybe<ScoreLeadCreateNestedManyWithoutRouteInput>;
  setter: UserCreateNestedOneWithoutRoutesSetInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteCreateWithoutSetterInput = {
  active?: Maybe<Scalars['Boolean']>;
  category: CategoryCreateNestedOneWithoutRoutesInput;
  competition: CompetitionCreateNestedOneWithoutRoutesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  grade: GradeCreateNestedOneWithoutRoutesInput;
  judge: UserCreateNestedOneWithoutRoutesJudgedInput;
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  scoreBoulder?: Maybe<ScoreBoulderCreateNestedManyWithoutRouteInput>;
  scoreLead?: Maybe<ScoreLeadCreateNestedManyWithoutRouteInput>;
  scoreSpeed?: Maybe<ScoreSpeedCreateNestedManyWithoutRouteInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteGroupBy = {
  __typename?: 'RouteGroupBy';
  _avg?: Maybe<RouteAvgAggregate>;
  _count?: Maybe<RouteCountAggregate>;
  _max?: Maybe<RouteMaxAggregate>;
  _min?: Maybe<RouteMinAggregate>;
  _sum?: Maybe<RouteSumAggregate>;
  active: Scalars['Boolean'];
  categoryId: Scalars['Int'];
  competitionId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  gradeId: Scalars['Int'];
  id: Scalars['Int'];
  judgeId: Scalars['Int'];
  name: Scalars['String'];
  number: Scalars['Int'];
  round: Round;
  routeType: RouteType;
  setterId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type RouteListRelationFilter = {
  every?: Maybe<RouteWhereInput>;
  none?: Maybe<RouteWhereInput>;
  some?: Maybe<RouteWhereInput>;
};

export type RouteMaxAggregate = {
  __typename?: 'RouteMaxAggregate';
  active?: Maybe<Scalars['Boolean']>;
  categoryId?: Maybe<Scalars['Int']>;
  competitionId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  gradeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  judgeId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  round?: Maybe<Round>;
  routeType?: Maybe<RouteType>;
  setterId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteMaxOrderByAggregateInput = {
  active?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  gradeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  judgeId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
  round?: Maybe<SortOrder>;
  routeType?: Maybe<SortOrder>;
  setterId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type RouteMinAggregate = {
  __typename?: 'RouteMinAggregate';
  active?: Maybe<Scalars['Boolean']>;
  categoryId?: Maybe<Scalars['Int']>;
  competitionId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  gradeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  judgeId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  round?: Maybe<Round>;
  routeType?: Maybe<RouteType>;
  setterId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RouteMinOrderByAggregateInput = {
  active?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  gradeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  judgeId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
  round?: Maybe<SortOrder>;
  routeType?: Maybe<SortOrder>;
  setterId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type RouteOrderByInput = {
  active?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  gradeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  judgeId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
  round?: Maybe<SortOrder>;
  routeType?: Maybe<SortOrder>;
  setterId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type RouteOrderByWithAggregationInput = {
  _avg?: Maybe<RouteAvgOrderByAggregateInput>;
  _count?: Maybe<RouteCountOrderByAggregateInput>;
  _max?: Maybe<RouteMaxOrderByAggregateInput>;
  _min?: Maybe<RouteMinOrderByAggregateInput>;
  _sum?: Maybe<RouteSumOrderByAggregateInput>;
  active?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  gradeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  judgeId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
  round?: Maybe<SortOrder>;
  routeType?: Maybe<SortOrder>;
  setterId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type RouteRelationFilter = {
  is?: Maybe<RouteWhereInput>;
  isNot?: Maybe<RouteWhereInput>;
};

export enum RouteScalarFieldEnum {
  Active = 'active',
  CategoryId = 'categoryId',
  CompetitionId = 'competitionId',
  CreatedAt = 'createdAt',
  Description = 'description',
  GradeId = 'gradeId',
  Id = 'id',
  JudgeId = 'judgeId',
  Name = 'name',
  Number = 'number',
  Round = 'round',
  RouteType = 'routeType',
  SetterId = 'setterId',
  UpdatedAt = 'updatedAt',
}

export type RouteScalarWhereInput = {
  AND?: Maybe<Array<RouteScalarWhereInput>>;
  NOT?: Maybe<Array<RouteScalarWhereInput>>;
  OR?: Maybe<Array<RouteScalarWhereInput>>;
  active?: Maybe<BoolFilter>;
  categoryId?: Maybe<IntFilter>;
  competitionId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  gradeId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  judgeId?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  number?: Maybe<IntFilter>;
  round?: Maybe<EnumRoundFilter>;
  routeType?: Maybe<EnumRouteTypeFilter>;
  setterId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type RouteScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<RouteScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<RouteScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<RouteScalarWhereWithAggregatesInput>>;
  active?: Maybe<BoolWithAggregatesFilter>;
  categoryId?: Maybe<IntWithAggregatesFilter>;
  competitionId?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  description?: Maybe<StringNullableWithAggregatesFilter>;
  gradeId?: Maybe<IntWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  judgeId?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  number?: Maybe<IntWithAggregatesFilter>;
  round?: Maybe<EnumRoundWithAggregatesFilter>;
  routeType?: Maybe<EnumRouteTypeWithAggregatesFilter>;
  setterId?: Maybe<IntWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type RouteSumAggregate = {
  __typename?: 'RouteSumAggregate';
  categoryId?: Maybe<Scalars['Int']>;
  competitionId?: Maybe<Scalars['Int']>;
  gradeId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  judgeId?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  setterId?: Maybe<Scalars['Int']>;
};

export type RouteSumOrderByAggregateInput = {
  categoryId?: Maybe<SortOrder>;
  competitionId?: Maybe<SortOrder>;
  gradeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  judgeId?: Maybe<SortOrder>;
  number?: Maybe<SortOrder>;
  setterId?: Maybe<SortOrder>;
};

export enum RouteType {
  Boulder = 'BOULDER',
  Duel = 'DUEL',
  Lead = 'LEAD',
  Speed = 'SPEED',
}

export type RouteUpdateInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutRoutesInput>;
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutRoutesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  grade?: Maybe<GradeUpdateOneRequiredWithoutRoutesInput>;
  judge?: Maybe<UserUpdateOneRequiredWithoutRoutesJudgedInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
  round?: Maybe<EnumRoundFieldUpdateOperationsInput>;
  routeType?: Maybe<EnumRouteTypeFieldUpdateOperationsInput>;
  scoreBoulder?: Maybe<ScoreBoulderUpdateManyWithoutRouteInput>;
  scoreLead?: Maybe<ScoreLeadUpdateManyWithoutRouteInput>;
  scoreSpeed?: Maybe<ScoreSpeedUpdateManyWithoutRouteInput>;
  setter?: Maybe<UserUpdateOneRequiredWithoutRoutesSetInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RouteUpdateManyMutationInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
  round?: Maybe<EnumRoundFieldUpdateOperationsInput>;
  routeType?: Maybe<EnumRouteTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RouteUpdateManyWithWhereWithoutCategoryInput = {
  data: RouteUpdateManyMutationInput;
  where: RouteScalarWhereInput;
};

export type RouteUpdateManyWithWhereWithoutCompetitionInput = {
  data: RouteUpdateManyMutationInput;
  where: RouteScalarWhereInput;
};

export type RouteUpdateManyWithWhereWithoutGradeInput = {
  data: RouteUpdateManyMutationInput;
  where: RouteScalarWhereInput;
};

export type RouteUpdateManyWithWhereWithoutJudgeInput = {
  data: RouteUpdateManyMutationInput;
  where: RouteScalarWhereInput;
};

export type RouteUpdateManyWithWhereWithoutSetterInput = {
  data: RouteUpdateManyMutationInput;
  where: RouteScalarWhereInput;
};

export type RouteUpdateManyWithoutCategoryInput = {
  connect?: Maybe<Array<RouteWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RouteCreateOrConnectWithoutCategoryInput>>;
  create?: Maybe<Array<RouteCreateWithoutCategoryInput>>;
  createMany?: Maybe<RouteCreateManyCategoryInputEnvelope>;
  delete?: Maybe<Array<RouteWhereUniqueInput>>;
  deleteMany?: Maybe<Array<RouteScalarWhereInput>>;
  disconnect?: Maybe<Array<RouteWhereUniqueInput>>;
  set?: Maybe<Array<RouteWhereUniqueInput>>;
  update?: Maybe<Array<RouteUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: Maybe<Array<RouteUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: Maybe<Array<RouteUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type RouteUpdateManyWithoutCompetitionInput = {
  connect?: Maybe<Array<RouteWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RouteCreateOrConnectWithoutCompetitionInput>>;
  create?: Maybe<Array<RouteCreateWithoutCompetitionInput>>;
  createMany?: Maybe<RouteCreateManyCompetitionInputEnvelope>;
  delete?: Maybe<Array<RouteWhereUniqueInput>>;
  deleteMany?: Maybe<Array<RouteScalarWhereInput>>;
  disconnect?: Maybe<Array<RouteWhereUniqueInput>>;
  set?: Maybe<Array<RouteWhereUniqueInput>>;
  update?: Maybe<Array<RouteUpdateWithWhereUniqueWithoutCompetitionInput>>;
  updateMany?: Maybe<Array<RouteUpdateManyWithWhereWithoutCompetitionInput>>;
  upsert?: Maybe<Array<RouteUpsertWithWhereUniqueWithoutCompetitionInput>>;
};

export type RouteUpdateManyWithoutGradeInput = {
  connect?: Maybe<Array<RouteWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RouteCreateOrConnectWithoutGradeInput>>;
  create?: Maybe<Array<RouteCreateWithoutGradeInput>>;
  createMany?: Maybe<RouteCreateManyGradeInputEnvelope>;
  delete?: Maybe<Array<RouteWhereUniqueInput>>;
  deleteMany?: Maybe<Array<RouteScalarWhereInput>>;
  disconnect?: Maybe<Array<RouteWhereUniqueInput>>;
  set?: Maybe<Array<RouteWhereUniqueInput>>;
  update?: Maybe<Array<RouteUpdateWithWhereUniqueWithoutGradeInput>>;
  updateMany?: Maybe<Array<RouteUpdateManyWithWhereWithoutGradeInput>>;
  upsert?: Maybe<Array<RouteUpsertWithWhereUniqueWithoutGradeInput>>;
};

export type RouteUpdateManyWithoutJudgeInput = {
  connect?: Maybe<Array<RouteWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RouteCreateOrConnectWithoutJudgeInput>>;
  create?: Maybe<Array<RouteCreateWithoutJudgeInput>>;
  createMany?: Maybe<RouteCreateManyJudgeInputEnvelope>;
  delete?: Maybe<Array<RouteWhereUniqueInput>>;
  deleteMany?: Maybe<Array<RouteScalarWhereInput>>;
  disconnect?: Maybe<Array<RouteWhereUniqueInput>>;
  set?: Maybe<Array<RouteWhereUniqueInput>>;
  update?: Maybe<Array<RouteUpdateWithWhereUniqueWithoutJudgeInput>>;
  updateMany?: Maybe<Array<RouteUpdateManyWithWhereWithoutJudgeInput>>;
  upsert?: Maybe<Array<RouteUpsertWithWhereUniqueWithoutJudgeInput>>;
};

export type RouteUpdateManyWithoutSetterInput = {
  connect?: Maybe<Array<RouteWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RouteCreateOrConnectWithoutSetterInput>>;
  create?: Maybe<Array<RouteCreateWithoutSetterInput>>;
  createMany?: Maybe<RouteCreateManySetterInputEnvelope>;
  delete?: Maybe<Array<RouteWhereUniqueInput>>;
  deleteMany?: Maybe<Array<RouteScalarWhereInput>>;
  disconnect?: Maybe<Array<RouteWhereUniqueInput>>;
  set?: Maybe<Array<RouteWhereUniqueInput>>;
  update?: Maybe<Array<RouteUpdateWithWhereUniqueWithoutSetterInput>>;
  updateMany?: Maybe<Array<RouteUpdateManyWithWhereWithoutSetterInput>>;
  upsert?: Maybe<Array<RouteUpsertWithWhereUniqueWithoutSetterInput>>;
};

export type RouteUpdateOneRequiredWithoutScoreBoulderInput = {
  connect?: Maybe<RouteWhereUniqueInput>;
  connectOrCreate?: Maybe<RouteCreateOrConnectWithoutScoreBoulderInput>;
  create?: Maybe<RouteCreateWithoutScoreBoulderInput>;
  update?: Maybe<RouteUpdateWithoutScoreBoulderInput>;
  upsert?: Maybe<RouteUpsertWithoutScoreBoulderInput>;
};

export type RouteUpdateOneRequiredWithoutScoreLeadInput = {
  connect?: Maybe<RouteWhereUniqueInput>;
  connectOrCreate?: Maybe<RouteCreateOrConnectWithoutScoreLeadInput>;
  create?: Maybe<RouteCreateWithoutScoreLeadInput>;
  update?: Maybe<RouteUpdateWithoutScoreLeadInput>;
  upsert?: Maybe<RouteUpsertWithoutScoreLeadInput>;
};

export type RouteUpdateOneRequiredWithoutScoreSpeedInput = {
  connect?: Maybe<RouteWhereUniqueInput>;
  connectOrCreate?: Maybe<RouteCreateOrConnectWithoutScoreSpeedInput>;
  create?: Maybe<RouteCreateWithoutScoreSpeedInput>;
  update?: Maybe<RouteUpdateWithoutScoreSpeedInput>;
  upsert?: Maybe<RouteUpsertWithoutScoreSpeedInput>;
};

export type RouteUpdateWithWhereUniqueWithoutCategoryInput = {
  data: RouteUpdateWithoutCategoryInput;
  where: RouteWhereUniqueInput;
};

export type RouteUpdateWithWhereUniqueWithoutCompetitionInput = {
  data: RouteUpdateWithoutCompetitionInput;
  where: RouteWhereUniqueInput;
};

export type RouteUpdateWithWhereUniqueWithoutGradeInput = {
  data: RouteUpdateWithoutGradeInput;
  where: RouteWhereUniqueInput;
};

export type RouteUpdateWithWhereUniqueWithoutJudgeInput = {
  data: RouteUpdateWithoutJudgeInput;
  where: RouteWhereUniqueInput;
};

export type RouteUpdateWithWhereUniqueWithoutSetterInput = {
  data: RouteUpdateWithoutSetterInput;
  where: RouteWhereUniqueInput;
};

export type RouteUpdateWithoutCategoryInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutRoutesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  grade?: Maybe<GradeUpdateOneRequiredWithoutRoutesInput>;
  judge?: Maybe<UserUpdateOneRequiredWithoutRoutesJudgedInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
  round?: Maybe<EnumRoundFieldUpdateOperationsInput>;
  routeType?: Maybe<EnumRouteTypeFieldUpdateOperationsInput>;
  scoreBoulder?: Maybe<ScoreBoulderUpdateManyWithoutRouteInput>;
  scoreLead?: Maybe<ScoreLeadUpdateManyWithoutRouteInput>;
  scoreSpeed?: Maybe<ScoreSpeedUpdateManyWithoutRouteInput>;
  setter?: Maybe<UserUpdateOneRequiredWithoutRoutesSetInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RouteUpdateWithoutCompetitionInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutRoutesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  grade?: Maybe<GradeUpdateOneRequiredWithoutRoutesInput>;
  judge?: Maybe<UserUpdateOneRequiredWithoutRoutesJudgedInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
  round?: Maybe<EnumRoundFieldUpdateOperationsInput>;
  routeType?: Maybe<EnumRouteTypeFieldUpdateOperationsInput>;
  scoreBoulder?: Maybe<ScoreBoulderUpdateManyWithoutRouteInput>;
  scoreLead?: Maybe<ScoreLeadUpdateManyWithoutRouteInput>;
  scoreSpeed?: Maybe<ScoreSpeedUpdateManyWithoutRouteInput>;
  setter?: Maybe<UserUpdateOneRequiredWithoutRoutesSetInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RouteUpdateWithoutGradeInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutRoutesInput>;
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutRoutesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  judge?: Maybe<UserUpdateOneRequiredWithoutRoutesJudgedInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
  round?: Maybe<EnumRoundFieldUpdateOperationsInput>;
  routeType?: Maybe<EnumRouteTypeFieldUpdateOperationsInput>;
  scoreBoulder?: Maybe<ScoreBoulderUpdateManyWithoutRouteInput>;
  scoreLead?: Maybe<ScoreLeadUpdateManyWithoutRouteInput>;
  scoreSpeed?: Maybe<ScoreSpeedUpdateManyWithoutRouteInput>;
  setter?: Maybe<UserUpdateOneRequiredWithoutRoutesSetInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RouteUpdateWithoutJudgeInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutRoutesInput>;
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutRoutesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  grade?: Maybe<GradeUpdateOneRequiredWithoutRoutesInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
  round?: Maybe<EnumRoundFieldUpdateOperationsInput>;
  routeType?: Maybe<EnumRouteTypeFieldUpdateOperationsInput>;
  scoreBoulder?: Maybe<ScoreBoulderUpdateManyWithoutRouteInput>;
  scoreLead?: Maybe<ScoreLeadUpdateManyWithoutRouteInput>;
  scoreSpeed?: Maybe<ScoreSpeedUpdateManyWithoutRouteInput>;
  setter?: Maybe<UserUpdateOneRequiredWithoutRoutesSetInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RouteUpdateWithoutScoreBoulderInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutRoutesInput>;
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutRoutesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  grade?: Maybe<GradeUpdateOneRequiredWithoutRoutesInput>;
  judge?: Maybe<UserUpdateOneRequiredWithoutRoutesJudgedInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
  round?: Maybe<EnumRoundFieldUpdateOperationsInput>;
  routeType?: Maybe<EnumRouteTypeFieldUpdateOperationsInput>;
  scoreLead?: Maybe<ScoreLeadUpdateManyWithoutRouteInput>;
  scoreSpeed?: Maybe<ScoreSpeedUpdateManyWithoutRouteInput>;
  setter?: Maybe<UserUpdateOneRequiredWithoutRoutesSetInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RouteUpdateWithoutScoreLeadInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutRoutesInput>;
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutRoutesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  grade?: Maybe<GradeUpdateOneRequiredWithoutRoutesInput>;
  judge?: Maybe<UserUpdateOneRequiredWithoutRoutesJudgedInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
  round?: Maybe<EnumRoundFieldUpdateOperationsInput>;
  routeType?: Maybe<EnumRouteTypeFieldUpdateOperationsInput>;
  scoreBoulder?: Maybe<ScoreBoulderUpdateManyWithoutRouteInput>;
  scoreSpeed?: Maybe<ScoreSpeedUpdateManyWithoutRouteInput>;
  setter?: Maybe<UserUpdateOneRequiredWithoutRoutesSetInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RouteUpdateWithoutScoreSpeedInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutRoutesInput>;
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutRoutesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  grade?: Maybe<GradeUpdateOneRequiredWithoutRoutesInput>;
  judge?: Maybe<UserUpdateOneRequiredWithoutRoutesJudgedInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
  round?: Maybe<EnumRoundFieldUpdateOperationsInput>;
  routeType?: Maybe<EnumRouteTypeFieldUpdateOperationsInput>;
  scoreBoulder?: Maybe<ScoreBoulderUpdateManyWithoutRouteInput>;
  scoreLead?: Maybe<ScoreLeadUpdateManyWithoutRouteInput>;
  setter?: Maybe<UserUpdateOneRequiredWithoutRoutesSetInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RouteUpdateWithoutSetterInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutRoutesInput>;
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutRoutesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  grade?: Maybe<GradeUpdateOneRequiredWithoutRoutesInput>;
  judge?: Maybe<UserUpdateOneRequiredWithoutRoutesJudgedInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  number?: Maybe<IntFieldUpdateOperationsInput>;
  round?: Maybe<EnumRoundFieldUpdateOperationsInput>;
  routeType?: Maybe<EnumRouteTypeFieldUpdateOperationsInput>;
  scoreBoulder?: Maybe<ScoreBoulderUpdateManyWithoutRouteInput>;
  scoreLead?: Maybe<ScoreLeadUpdateManyWithoutRouteInput>;
  scoreSpeed?: Maybe<ScoreSpeedUpdateManyWithoutRouteInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RouteUpsertWithWhereUniqueWithoutCategoryInput = {
  create: RouteCreateWithoutCategoryInput;
  update: RouteUpdateWithoutCategoryInput;
  where: RouteWhereUniqueInput;
};

export type RouteUpsertWithWhereUniqueWithoutCompetitionInput = {
  create: RouteCreateWithoutCompetitionInput;
  update: RouteUpdateWithoutCompetitionInput;
  where: RouteWhereUniqueInput;
};

export type RouteUpsertWithWhereUniqueWithoutGradeInput = {
  create: RouteCreateWithoutGradeInput;
  update: RouteUpdateWithoutGradeInput;
  where: RouteWhereUniqueInput;
};

export type RouteUpsertWithWhereUniqueWithoutJudgeInput = {
  create: RouteCreateWithoutJudgeInput;
  update: RouteUpdateWithoutJudgeInput;
  where: RouteWhereUniqueInput;
};

export type RouteUpsertWithWhereUniqueWithoutSetterInput = {
  create: RouteCreateWithoutSetterInput;
  update: RouteUpdateWithoutSetterInput;
  where: RouteWhereUniqueInput;
};

export type RouteUpsertWithoutScoreBoulderInput = {
  create: RouteCreateWithoutScoreBoulderInput;
  update: RouteUpdateWithoutScoreBoulderInput;
};

export type RouteUpsertWithoutScoreLeadInput = {
  create: RouteCreateWithoutScoreLeadInput;
  update: RouteUpdateWithoutScoreLeadInput;
};

export type RouteUpsertWithoutScoreSpeedInput = {
  create: RouteCreateWithoutScoreSpeedInput;
  update: RouteUpdateWithoutScoreSpeedInput;
};

export type RouteWhereInput = {
  AND?: Maybe<Array<RouteWhereInput>>;
  NOT?: Maybe<Array<RouteWhereInput>>;
  OR?: Maybe<Array<RouteWhereInput>>;
  active?: Maybe<BoolFilter>;
  category?: Maybe<CategoryRelationFilter>;
  categoryId?: Maybe<IntFilter>;
  competition?: Maybe<CompetitionRelationFilter>;
  competitionId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  grade?: Maybe<GradeRelationFilter>;
  gradeId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  judge?: Maybe<UserRelationFilter>;
  judgeId?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  number?: Maybe<IntFilter>;
  round?: Maybe<EnumRoundFilter>;
  routeType?: Maybe<EnumRouteTypeFilter>;
  scoreBoulder?: Maybe<ScoreBoulderListRelationFilter>;
  scoreLead?: Maybe<ScoreLeadListRelationFilter>;
  scoreSpeed?: Maybe<ScoreSpeedListRelationFilter>;
  setter?: Maybe<UserRelationFilter>;
  setterId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type RouteWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ScoreBoulder = {
  __typename?: 'ScoreBoulder';
  attempts?: Maybe<Scalars['Int']>;
  comment?: Maybe<Comment>;
  commentId?: Maybe<Scalars['Int']>;
  competitor: Competitor;
  competitorId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  route: Route;
  routeId: Scalars['Int'];
  time?: Maybe<Scalars['Int']>;
  top?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  zone?: Maybe<Scalars['Int']>;
};

export type ScoreBoulderAvgAggregate = {
  __typename?: 'ScoreBoulderAvgAggregate';
  attempts?: Maybe<Scalars['Float']>;
  commentId?: Maybe<Scalars['Float']>;
  competitorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  routeId?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
  top?: Maybe<Scalars['Float']>;
  zone?: Maybe<Scalars['Float']>;
};

export type ScoreBoulderAvgOrderByAggregateInput = {
  attempts?: Maybe<SortOrder>;
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  top?: Maybe<SortOrder>;
  zone?: Maybe<SortOrder>;
};

export type ScoreBoulderCountAggregate = {
  __typename?: 'ScoreBoulderCountAggregate';
  _all: Scalars['Int'];
  attempts: Scalars['Int'];
  commentId: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  routeId: Scalars['Int'];
  time: Scalars['Int'];
  top: Scalars['Int'];
  updatedAt: Scalars['Int'];
  zone: Scalars['Int'];
};

export type ScoreBoulderCountOrderByAggregateInput = {
  attempts?: Maybe<SortOrder>;
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  top?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  zone?: Maybe<SortOrder>;
};

export type ScoreBoulderCreateInput = {
  attempts?: Maybe<Scalars['Int']>;
  comment?: Maybe<CommentCreateNestedOneWithoutScoresBoulderInput>;
  competitor: CompetitorCreateNestedOneWithoutScoresBoulderInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  route: RouteCreateNestedOneWithoutScoreBoulderInput;
  time?: Maybe<Scalars['Int']>;
  top?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  zone?: Maybe<Scalars['Int']>;
};

export type ScoreBoulderCreateManyCommentInput = {
  attempts?: Maybe<Scalars['Int']>;
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  routeId: Scalars['Int'];
  time?: Maybe<Scalars['Int']>;
  top?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  zone?: Maybe<Scalars['Int']>;
};

export type ScoreBoulderCreateManyCommentInputEnvelope = {
  data: Array<ScoreBoulderCreateManyCommentInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ScoreBoulderCreateManyCompetitorInput = {
  attempts?: Maybe<Scalars['Int']>;
  commentId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  routeId: Scalars['Int'];
  time?: Maybe<Scalars['Int']>;
  top?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  zone?: Maybe<Scalars['Int']>;
};

export type ScoreBoulderCreateManyCompetitorInputEnvelope = {
  data: Array<ScoreBoulderCreateManyCompetitorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ScoreBoulderCreateManyInput = {
  attempts?: Maybe<Scalars['Int']>;
  commentId?: Maybe<Scalars['Int']>;
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  routeId: Scalars['Int'];
  time?: Maybe<Scalars['Int']>;
  top?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  zone?: Maybe<Scalars['Int']>;
};

export type ScoreBoulderCreateManyRouteInput = {
  attempts?: Maybe<Scalars['Int']>;
  commentId?: Maybe<Scalars['Int']>;
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  top?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  zone?: Maybe<Scalars['Int']>;
};

export type ScoreBoulderCreateManyRouteInputEnvelope = {
  data: Array<ScoreBoulderCreateManyRouteInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ScoreBoulderCreateNestedManyWithoutCommentInput = {
  connect?: Maybe<Array<ScoreBoulderWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<ScoreBoulderCreateOrConnectWithoutCommentInput>
  >;
  create?: Maybe<Array<ScoreBoulderCreateWithoutCommentInput>>;
  createMany?: Maybe<ScoreBoulderCreateManyCommentInputEnvelope>;
};

export type ScoreBoulderCreateNestedManyWithoutCompetitorInput = {
  connect?: Maybe<Array<ScoreBoulderWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<ScoreBoulderCreateOrConnectWithoutCompetitorInput>
  >;
  create?: Maybe<Array<ScoreBoulderCreateWithoutCompetitorInput>>;
  createMany?: Maybe<ScoreBoulderCreateManyCompetitorInputEnvelope>;
};

export type ScoreBoulderCreateNestedManyWithoutRouteInput = {
  connect?: Maybe<Array<ScoreBoulderWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ScoreBoulderCreateOrConnectWithoutRouteInput>>;
  create?: Maybe<Array<ScoreBoulderCreateWithoutRouteInput>>;
  createMany?: Maybe<ScoreBoulderCreateManyRouteInputEnvelope>;
};

export type ScoreBoulderCreateOrConnectWithoutCommentInput = {
  create: ScoreBoulderCreateWithoutCommentInput;
  where: ScoreBoulderWhereUniqueInput;
};

export type ScoreBoulderCreateOrConnectWithoutCompetitorInput = {
  create: ScoreBoulderCreateWithoutCompetitorInput;
  where: ScoreBoulderWhereUniqueInput;
};

export type ScoreBoulderCreateOrConnectWithoutRouteInput = {
  create: ScoreBoulderCreateWithoutRouteInput;
  where: ScoreBoulderWhereUniqueInput;
};

export type ScoreBoulderCreateWithoutCommentInput = {
  attempts?: Maybe<Scalars['Int']>;
  competitor: CompetitorCreateNestedOneWithoutScoresBoulderInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  route: RouteCreateNestedOneWithoutScoreBoulderInput;
  time?: Maybe<Scalars['Int']>;
  top?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  zone?: Maybe<Scalars['Int']>;
};

export type ScoreBoulderCreateWithoutCompetitorInput = {
  attempts?: Maybe<Scalars['Int']>;
  comment?: Maybe<CommentCreateNestedOneWithoutScoresBoulderInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  route: RouteCreateNestedOneWithoutScoreBoulderInput;
  time?: Maybe<Scalars['Int']>;
  top?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  zone?: Maybe<Scalars['Int']>;
};

export type ScoreBoulderCreateWithoutRouteInput = {
  attempts?: Maybe<Scalars['Int']>;
  comment?: Maybe<CommentCreateNestedOneWithoutScoresBoulderInput>;
  competitor: CompetitorCreateNestedOneWithoutScoresBoulderInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  time?: Maybe<Scalars['Int']>;
  top?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  zone?: Maybe<Scalars['Int']>;
};

export type ScoreBoulderGroupBy = {
  __typename?: 'ScoreBoulderGroupBy';
  _avg?: Maybe<ScoreBoulderAvgAggregate>;
  _count?: Maybe<ScoreBoulderCountAggregate>;
  _max?: Maybe<ScoreBoulderMaxAggregate>;
  _min?: Maybe<ScoreBoulderMinAggregate>;
  _sum?: Maybe<ScoreBoulderSumAggregate>;
  attempts?: Maybe<Scalars['Int']>;
  commentId?: Maybe<Scalars['Int']>;
  competitorId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  routeId: Scalars['Int'];
  time?: Maybe<Scalars['Int']>;
  top?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  zone?: Maybe<Scalars['Int']>;
};

export type ScoreBoulderListRelationFilter = {
  every?: Maybe<ScoreBoulderWhereInput>;
  none?: Maybe<ScoreBoulderWhereInput>;
  some?: Maybe<ScoreBoulderWhereInput>;
};

export type ScoreBoulderMaxAggregate = {
  __typename?: 'ScoreBoulderMaxAggregate';
  attempts?: Maybe<Scalars['Int']>;
  commentId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  routeId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  top?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  zone?: Maybe<Scalars['Int']>;
};

export type ScoreBoulderMaxOrderByAggregateInput = {
  attempts?: Maybe<SortOrder>;
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  top?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  zone?: Maybe<SortOrder>;
};

export type ScoreBoulderMinAggregate = {
  __typename?: 'ScoreBoulderMinAggregate';
  attempts?: Maybe<Scalars['Int']>;
  commentId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  routeId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  top?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  zone?: Maybe<Scalars['Int']>;
};

export type ScoreBoulderMinOrderByAggregateInput = {
  attempts?: Maybe<SortOrder>;
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  top?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  zone?: Maybe<SortOrder>;
};

export type ScoreBoulderOrderByInput = {
  attempts?: Maybe<SortOrder>;
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  top?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  zone?: Maybe<SortOrder>;
};

export type ScoreBoulderOrderByWithAggregationInput = {
  _avg?: Maybe<ScoreBoulderAvgOrderByAggregateInput>;
  _count?: Maybe<ScoreBoulderCountOrderByAggregateInput>;
  _max?: Maybe<ScoreBoulderMaxOrderByAggregateInput>;
  _min?: Maybe<ScoreBoulderMinOrderByAggregateInput>;
  _sum?: Maybe<ScoreBoulderSumOrderByAggregateInput>;
  attempts?: Maybe<SortOrder>;
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  top?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  zone?: Maybe<SortOrder>;
};

export enum ScoreBoulderScalarFieldEnum {
  Attempts = 'attempts',
  CommentId = 'commentId',
  CompetitorId = 'competitorId',
  CreatedAt = 'createdAt',
  Id = 'id',
  RouteId = 'routeId',
  Time = 'time',
  Top = 'top',
  UpdatedAt = 'updatedAt',
  Zone = 'zone',
}

export type ScoreBoulderScalarWhereInput = {
  AND?: Maybe<Array<ScoreBoulderScalarWhereInput>>;
  NOT?: Maybe<Array<ScoreBoulderScalarWhereInput>>;
  OR?: Maybe<Array<ScoreBoulderScalarWhereInput>>;
  attempts?: Maybe<IntNullableFilter>;
  commentId?: Maybe<IntNullableFilter>;
  competitorId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  routeId?: Maybe<IntFilter>;
  time?: Maybe<IntNullableFilter>;
  top?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  zone?: Maybe<IntNullableFilter>;
};

export type ScoreBoulderScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ScoreBoulderScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ScoreBoulderScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ScoreBoulderScalarWhereWithAggregatesInput>>;
  attempts?: Maybe<IntNullableWithAggregatesFilter>;
  commentId?: Maybe<IntNullableWithAggregatesFilter>;
  competitorId?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  routeId?: Maybe<IntWithAggregatesFilter>;
  time?: Maybe<IntNullableWithAggregatesFilter>;
  top?: Maybe<IntNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  zone?: Maybe<IntNullableWithAggregatesFilter>;
};

export type ScoreBoulderSumAggregate = {
  __typename?: 'ScoreBoulderSumAggregate';
  attempts?: Maybe<Scalars['Int']>;
  commentId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  routeId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  top?: Maybe<Scalars['Int']>;
  zone?: Maybe<Scalars['Int']>;
};

export type ScoreBoulderSumOrderByAggregateInput = {
  attempts?: Maybe<SortOrder>;
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  top?: Maybe<SortOrder>;
  zone?: Maybe<SortOrder>;
};

export type ScoreBoulderUpdateInput = {
  attempts?: Maybe<NullableIntFieldUpdateOperationsInput>;
  comment?: Maybe<CommentUpdateOneWithoutScoresBoulderInput>;
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutScoresBoulderInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  route?: Maybe<RouteUpdateOneRequiredWithoutScoreBoulderInput>;
  time?: Maybe<NullableIntFieldUpdateOperationsInput>;
  top?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  zone?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ScoreBoulderUpdateManyMutationInput = {
  attempts?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  time?: Maybe<NullableIntFieldUpdateOperationsInput>;
  top?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  zone?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ScoreBoulderUpdateManyWithWhereWithoutCommentInput = {
  data: ScoreBoulderUpdateManyMutationInput;
  where: ScoreBoulderScalarWhereInput;
};

export type ScoreBoulderUpdateManyWithWhereWithoutCompetitorInput = {
  data: ScoreBoulderUpdateManyMutationInput;
  where: ScoreBoulderScalarWhereInput;
};

export type ScoreBoulderUpdateManyWithWhereWithoutRouteInput = {
  data: ScoreBoulderUpdateManyMutationInput;
  where: ScoreBoulderScalarWhereInput;
};

export type ScoreBoulderUpdateManyWithoutCommentInput = {
  connect?: Maybe<Array<ScoreBoulderWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<ScoreBoulderCreateOrConnectWithoutCommentInput>
  >;
  create?: Maybe<Array<ScoreBoulderCreateWithoutCommentInput>>;
  createMany?: Maybe<ScoreBoulderCreateManyCommentInputEnvelope>;
  delete?: Maybe<Array<ScoreBoulderWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ScoreBoulderScalarWhereInput>>;
  disconnect?: Maybe<Array<ScoreBoulderWhereUniqueInput>>;
  set?: Maybe<Array<ScoreBoulderWhereUniqueInput>>;
  update?: Maybe<Array<ScoreBoulderUpdateWithWhereUniqueWithoutCommentInput>>;
  updateMany?: Maybe<Array<ScoreBoulderUpdateManyWithWhereWithoutCommentInput>>;
  upsert?: Maybe<Array<ScoreBoulderUpsertWithWhereUniqueWithoutCommentInput>>;
};

export type ScoreBoulderUpdateManyWithoutCompetitorInput = {
  connect?: Maybe<Array<ScoreBoulderWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<ScoreBoulderCreateOrConnectWithoutCompetitorInput>
  >;
  create?: Maybe<Array<ScoreBoulderCreateWithoutCompetitorInput>>;
  createMany?: Maybe<ScoreBoulderCreateManyCompetitorInputEnvelope>;
  delete?: Maybe<Array<ScoreBoulderWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ScoreBoulderScalarWhereInput>>;
  disconnect?: Maybe<Array<ScoreBoulderWhereUniqueInput>>;
  set?: Maybe<Array<ScoreBoulderWhereUniqueInput>>;
  update?: Maybe<
    Array<ScoreBoulderUpdateWithWhereUniqueWithoutCompetitorInput>
  >;
  updateMany?: Maybe<
    Array<ScoreBoulderUpdateManyWithWhereWithoutCompetitorInput>
  >;
  upsert?: Maybe<
    Array<ScoreBoulderUpsertWithWhereUniqueWithoutCompetitorInput>
  >;
};

export type ScoreBoulderUpdateManyWithoutRouteInput = {
  connect?: Maybe<Array<ScoreBoulderWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ScoreBoulderCreateOrConnectWithoutRouteInput>>;
  create?: Maybe<Array<ScoreBoulderCreateWithoutRouteInput>>;
  createMany?: Maybe<ScoreBoulderCreateManyRouteInputEnvelope>;
  delete?: Maybe<Array<ScoreBoulderWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ScoreBoulderScalarWhereInput>>;
  disconnect?: Maybe<Array<ScoreBoulderWhereUniqueInput>>;
  set?: Maybe<Array<ScoreBoulderWhereUniqueInput>>;
  update?: Maybe<Array<ScoreBoulderUpdateWithWhereUniqueWithoutRouteInput>>;
  updateMany?: Maybe<Array<ScoreBoulderUpdateManyWithWhereWithoutRouteInput>>;
  upsert?: Maybe<Array<ScoreBoulderUpsertWithWhereUniqueWithoutRouteInput>>;
};

export type ScoreBoulderUpdateWithWhereUniqueWithoutCommentInput = {
  data: ScoreBoulderUpdateWithoutCommentInput;
  where: ScoreBoulderWhereUniqueInput;
};

export type ScoreBoulderUpdateWithWhereUniqueWithoutCompetitorInput = {
  data: ScoreBoulderUpdateWithoutCompetitorInput;
  where: ScoreBoulderWhereUniqueInput;
};

export type ScoreBoulderUpdateWithWhereUniqueWithoutRouteInput = {
  data: ScoreBoulderUpdateWithoutRouteInput;
  where: ScoreBoulderWhereUniqueInput;
};

export type ScoreBoulderUpdateWithoutCommentInput = {
  attempts?: Maybe<NullableIntFieldUpdateOperationsInput>;
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutScoresBoulderInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  route?: Maybe<RouteUpdateOneRequiredWithoutScoreBoulderInput>;
  time?: Maybe<NullableIntFieldUpdateOperationsInput>;
  top?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  zone?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ScoreBoulderUpdateWithoutCompetitorInput = {
  attempts?: Maybe<NullableIntFieldUpdateOperationsInput>;
  comment?: Maybe<CommentUpdateOneWithoutScoresBoulderInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  route?: Maybe<RouteUpdateOneRequiredWithoutScoreBoulderInput>;
  time?: Maybe<NullableIntFieldUpdateOperationsInput>;
  top?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  zone?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ScoreBoulderUpdateWithoutRouteInput = {
  attempts?: Maybe<NullableIntFieldUpdateOperationsInput>;
  comment?: Maybe<CommentUpdateOneWithoutScoresBoulderInput>;
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutScoresBoulderInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  time?: Maybe<NullableIntFieldUpdateOperationsInput>;
  top?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  zone?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ScoreBoulderUpsertWithWhereUniqueWithoutCommentInput = {
  create: ScoreBoulderCreateWithoutCommentInput;
  update: ScoreBoulderUpdateWithoutCommentInput;
  where: ScoreBoulderWhereUniqueInput;
};

export type ScoreBoulderUpsertWithWhereUniqueWithoutCompetitorInput = {
  create: ScoreBoulderCreateWithoutCompetitorInput;
  update: ScoreBoulderUpdateWithoutCompetitorInput;
  where: ScoreBoulderWhereUniqueInput;
};

export type ScoreBoulderUpsertWithWhereUniqueWithoutRouteInput = {
  create: ScoreBoulderCreateWithoutRouteInput;
  update: ScoreBoulderUpdateWithoutRouteInput;
  where: ScoreBoulderWhereUniqueInput;
};

export type ScoreBoulderWhereInput = {
  AND?: Maybe<Array<ScoreBoulderWhereInput>>;
  NOT?: Maybe<Array<ScoreBoulderWhereInput>>;
  OR?: Maybe<Array<ScoreBoulderWhereInput>>;
  attempts?: Maybe<IntNullableFilter>;
  comment?: Maybe<CommentRelationFilter>;
  commentId?: Maybe<IntNullableFilter>;
  competitor?: Maybe<CompetitorRelationFilter>;
  competitorId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  route?: Maybe<RouteRelationFilter>;
  routeId?: Maybe<IntFilter>;
  time?: Maybe<IntNullableFilter>;
  top?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  zone?: Maybe<IntNullableFilter>;
};

export type ScoreBoulderWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ScoreInput = {
  comment?: Maybe<Scalars['String']>;
  competitorId: Scalars['Float'];
  routeId: Scalars['Float'];
  score?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['Float']>;
};

export type ScoreLead = {
  __typename?: 'ScoreLead';
  comment?: Maybe<Comment>;
  commentId?: Maybe<Scalars['Int']>;
  competitor: Competitor;
  competitorId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  height: Scalars['String'];
  id: Scalars['Int'];
  route: Route;
  routeId: Scalars['Int'];
  time: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ScoreLeadAvgAggregate = {
  __typename?: 'ScoreLeadAvgAggregate';
  commentId?: Maybe<Scalars['Float']>;
  competitorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  routeId?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
};

export type ScoreLeadAvgOrderByAggregateInput = {
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
};

export type ScoreLeadCountAggregate = {
  __typename?: 'ScoreLeadCountAggregate';
  _all: Scalars['Int'];
  commentId: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['Int'];
  routeId: Scalars['Int'];
  time: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ScoreLeadCountOrderByAggregateInput = {
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ScoreLeadCreateInput = {
  comment?: Maybe<CommentCreateNestedOneWithoutScoresLeadInput>;
  competitor: CompetitorCreateNestedOneWithoutScoresLeadInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  height: Scalars['String'];
  route: RouteCreateNestedOneWithoutScoreLeadInput;
  time: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreLeadCreateManyCommentInput = {
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  routeId: Scalars['Int'];
  time: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreLeadCreateManyCommentInputEnvelope = {
  data: Array<ScoreLeadCreateManyCommentInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ScoreLeadCreateManyCompetitorInput = {
  commentId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  routeId: Scalars['Int'];
  time: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreLeadCreateManyCompetitorInputEnvelope = {
  data: Array<ScoreLeadCreateManyCompetitorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ScoreLeadCreateManyInput = {
  commentId?: Maybe<Scalars['Int']>;
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  routeId: Scalars['Int'];
  time: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreLeadCreateManyRouteInput = {
  commentId?: Maybe<Scalars['Int']>;
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  time: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreLeadCreateManyRouteInputEnvelope = {
  data: Array<ScoreLeadCreateManyRouteInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ScoreLeadCreateNestedManyWithoutCommentInput = {
  connect?: Maybe<Array<ScoreLeadWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ScoreLeadCreateOrConnectWithoutCommentInput>>;
  create?: Maybe<Array<ScoreLeadCreateWithoutCommentInput>>;
  createMany?: Maybe<ScoreLeadCreateManyCommentInputEnvelope>;
};

export type ScoreLeadCreateNestedManyWithoutCompetitorInput = {
  connect?: Maybe<Array<ScoreLeadWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<ScoreLeadCreateOrConnectWithoutCompetitorInput>
  >;
  create?: Maybe<Array<ScoreLeadCreateWithoutCompetitorInput>>;
  createMany?: Maybe<ScoreLeadCreateManyCompetitorInputEnvelope>;
};

export type ScoreLeadCreateNestedManyWithoutRouteInput = {
  connect?: Maybe<Array<ScoreLeadWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ScoreLeadCreateOrConnectWithoutRouteInput>>;
  create?: Maybe<Array<ScoreLeadCreateWithoutRouteInput>>;
  createMany?: Maybe<ScoreLeadCreateManyRouteInputEnvelope>;
};

export type ScoreLeadCreateOrConnectWithoutCommentInput = {
  create: ScoreLeadCreateWithoutCommentInput;
  where: ScoreLeadWhereUniqueInput;
};

export type ScoreLeadCreateOrConnectWithoutCompetitorInput = {
  create: ScoreLeadCreateWithoutCompetitorInput;
  where: ScoreLeadWhereUniqueInput;
};

export type ScoreLeadCreateOrConnectWithoutRouteInput = {
  create: ScoreLeadCreateWithoutRouteInput;
  where: ScoreLeadWhereUniqueInput;
};

export type ScoreLeadCreateWithoutCommentInput = {
  competitor: CompetitorCreateNestedOneWithoutScoresLeadInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  height: Scalars['String'];
  route: RouteCreateNestedOneWithoutScoreLeadInput;
  time: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreLeadCreateWithoutCompetitorInput = {
  comment?: Maybe<CommentCreateNestedOneWithoutScoresLeadInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  height: Scalars['String'];
  route: RouteCreateNestedOneWithoutScoreLeadInput;
  time: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreLeadCreateWithoutRouteInput = {
  comment?: Maybe<CommentCreateNestedOneWithoutScoresLeadInput>;
  competitor: CompetitorCreateNestedOneWithoutScoresLeadInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  height: Scalars['String'];
  time: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreLeadGroupBy = {
  __typename?: 'ScoreLeadGroupBy';
  _avg?: Maybe<ScoreLeadAvgAggregate>;
  _count?: Maybe<ScoreLeadCountAggregate>;
  _max?: Maybe<ScoreLeadMaxAggregate>;
  _min?: Maybe<ScoreLeadMinAggregate>;
  _sum?: Maybe<ScoreLeadSumAggregate>;
  commentId?: Maybe<Scalars['Int']>;
  competitorId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  height: Scalars['String'];
  id: Scalars['Int'];
  routeId: Scalars['Int'];
  time: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ScoreLeadListRelationFilter = {
  every?: Maybe<ScoreLeadWhereInput>;
  none?: Maybe<ScoreLeadWhereInput>;
  some?: Maybe<ScoreLeadWhereInput>;
};

export type ScoreLeadMaxAggregate = {
  __typename?: 'ScoreLeadMaxAggregate';
  commentId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  routeId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreLeadMaxOrderByAggregateInput = {
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ScoreLeadMinAggregate = {
  __typename?: 'ScoreLeadMinAggregate';
  commentId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  routeId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreLeadMinOrderByAggregateInput = {
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ScoreLeadOrderByInput = {
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ScoreLeadOrderByWithAggregationInput = {
  _avg?: Maybe<ScoreLeadAvgOrderByAggregateInput>;
  _count?: Maybe<ScoreLeadCountOrderByAggregateInput>;
  _max?: Maybe<ScoreLeadMaxOrderByAggregateInput>;
  _min?: Maybe<ScoreLeadMinOrderByAggregateInput>;
  _sum?: Maybe<ScoreLeadSumOrderByAggregateInput>;
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum ScoreLeadScalarFieldEnum {
  CommentId = 'commentId',
  CompetitorId = 'competitorId',
  CreatedAt = 'createdAt',
  Height = 'height',
  Id = 'id',
  RouteId = 'routeId',
  Time = 'time',
  UpdatedAt = 'updatedAt',
}

export type ScoreLeadScalarWhereInput = {
  AND?: Maybe<Array<ScoreLeadScalarWhereInput>>;
  NOT?: Maybe<Array<ScoreLeadScalarWhereInput>>;
  OR?: Maybe<Array<ScoreLeadScalarWhereInput>>;
  commentId?: Maybe<IntNullableFilter>;
  competitorId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  height?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  routeId?: Maybe<IntFilter>;
  time?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ScoreLeadScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ScoreLeadScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ScoreLeadScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ScoreLeadScalarWhereWithAggregatesInput>>;
  commentId?: Maybe<IntNullableWithAggregatesFilter>;
  competitorId?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  height?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  routeId?: Maybe<IntWithAggregatesFilter>;
  time?: Maybe<IntWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type ScoreLeadSumAggregate = {
  __typename?: 'ScoreLeadSumAggregate';
  commentId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  routeId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
};

export type ScoreLeadSumOrderByAggregateInput = {
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
};

export type ScoreLeadUpdateInput = {
  comment?: Maybe<CommentUpdateOneWithoutScoresLeadInput>;
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutScoresLeadInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  route?: Maybe<RouteUpdateOneRequiredWithoutScoreLeadInput>;
  time?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScoreLeadUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  time?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScoreLeadUpdateManyWithWhereWithoutCommentInput = {
  data: ScoreLeadUpdateManyMutationInput;
  where: ScoreLeadScalarWhereInput;
};

export type ScoreLeadUpdateManyWithWhereWithoutCompetitorInput = {
  data: ScoreLeadUpdateManyMutationInput;
  where: ScoreLeadScalarWhereInput;
};

export type ScoreLeadUpdateManyWithWhereWithoutRouteInput = {
  data: ScoreLeadUpdateManyMutationInput;
  where: ScoreLeadScalarWhereInput;
};

export type ScoreLeadUpdateManyWithoutCommentInput = {
  connect?: Maybe<Array<ScoreLeadWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ScoreLeadCreateOrConnectWithoutCommentInput>>;
  create?: Maybe<Array<ScoreLeadCreateWithoutCommentInput>>;
  createMany?: Maybe<ScoreLeadCreateManyCommentInputEnvelope>;
  delete?: Maybe<Array<ScoreLeadWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ScoreLeadScalarWhereInput>>;
  disconnect?: Maybe<Array<ScoreLeadWhereUniqueInput>>;
  set?: Maybe<Array<ScoreLeadWhereUniqueInput>>;
  update?: Maybe<Array<ScoreLeadUpdateWithWhereUniqueWithoutCommentInput>>;
  updateMany?: Maybe<Array<ScoreLeadUpdateManyWithWhereWithoutCommentInput>>;
  upsert?: Maybe<Array<ScoreLeadUpsertWithWhereUniqueWithoutCommentInput>>;
};

export type ScoreLeadUpdateManyWithoutCompetitorInput = {
  connect?: Maybe<Array<ScoreLeadWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<ScoreLeadCreateOrConnectWithoutCompetitorInput>
  >;
  create?: Maybe<Array<ScoreLeadCreateWithoutCompetitorInput>>;
  createMany?: Maybe<ScoreLeadCreateManyCompetitorInputEnvelope>;
  delete?: Maybe<Array<ScoreLeadWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ScoreLeadScalarWhereInput>>;
  disconnect?: Maybe<Array<ScoreLeadWhereUniqueInput>>;
  set?: Maybe<Array<ScoreLeadWhereUniqueInput>>;
  update?: Maybe<Array<ScoreLeadUpdateWithWhereUniqueWithoutCompetitorInput>>;
  updateMany?: Maybe<Array<ScoreLeadUpdateManyWithWhereWithoutCompetitorInput>>;
  upsert?: Maybe<Array<ScoreLeadUpsertWithWhereUniqueWithoutCompetitorInput>>;
};

export type ScoreLeadUpdateManyWithoutRouteInput = {
  connect?: Maybe<Array<ScoreLeadWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ScoreLeadCreateOrConnectWithoutRouteInput>>;
  create?: Maybe<Array<ScoreLeadCreateWithoutRouteInput>>;
  createMany?: Maybe<ScoreLeadCreateManyRouteInputEnvelope>;
  delete?: Maybe<Array<ScoreLeadWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ScoreLeadScalarWhereInput>>;
  disconnect?: Maybe<Array<ScoreLeadWhereUniqueInput>>;
  set?: Maybe<Array<ScoreLeadWhereUniqueInput>>;
  update?: Maybe<Array<ScoreLeadUpdateWithWhereUniqueWithoutRouteInput>>;
  updateMany?: Maybe<Array<ScoreLeadUpdateManyWithWhereWithoutRouteInput>>;
  upsert?: Maybe<Array<ScoreLeadUpsertWithWhereUniqueWithoutRouteInput>>;
};

export type ScoreLeadUpdateWithWhereUniqueWithoutCommentInput = {
  data: ScoreLeadUpdateWithoutCommentInput;
  where: ScoreLeadWhereUniqueInput;
};

export type ScoreLeadUpdateWithWhereUniqueWithoutCompetitorInput = {
  data: ScoreLeadUpdateWithoutCompetitorInput;
  where: ScoreLeadWhereUniqueInput;
};

export type ScoreLeadUpdateWithWhereUniqueWithoutRouteInput = {
  data: ScoreLeadUpdateWithoutRouteInput;
  where: ScoreLeadWhereUniqueInput;
};

export type ScoreLeadUpdateWithoutCommentInput = {
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutScoresLeadInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  route?: Maybe<RouteUpdateOneRequiredWithoutScoreLeadInput>;
  time?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScoreLeadUpdateWithoutCompetitorInput = {
  comment?: Maybe<CommentUpdateOneWithoutScoresLeadInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  route?: Maybe<RouteUpdateOneRequiredWithoutScoreLeadInput>;
  time?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScoreLeadUpdateWithoutRouteInput = {
  comment?: Maybe<CommentUpdateOneWithoutScoresLeadInput>;
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutScoresLeadInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  height?: Maybe<StringFieldUpdateOperationsInput>;
  time?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScoreLeadUpsertWithWhereUniqueWithoutCommentInput = {
  create: ScoreLeadCreateWithoutCommentInput;
  update: ScoreLeadUpdateWithoutCommentInput;
  where: ScoreLeadWhereUniqueInput;
};

export type ScoreLeadUpsertWithWhereUniqueWithoutCompetitorInput = {
  create: ScoreLeadCreateWithoutCompetitorInput;
  update: ScoreLeadUpdateWithoutCompetitorInput;
  where: ScoreLeadWhereUniqueInput;
};

export type ScoreLeadUpsertWithWhereUniqueWithoutRouteInput = {
  create: ScoreLeadCreateWithoutRouteInput;
  update: ScoreLeadUpdateWithoutRouteInput;
  where: ScoreLeadWhereUniqueInput;
};

export type ScoreLeadWhereInput = {
  AND?: Maybe<Array<ScoreLeadWhereInput>>;
  NOT?: Maybe<Array<ScoreLeadWhereInput>>;
  OR?: Maybe<Array<ScoreLeadWhereInput>>;
  comment?: Maybe<CommentRelationFilter>;
  commentId?: Maybe<IntNullableFilter>;
  competitor?: Maybe<CompetitorRelationFilter>;
  competitorId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  height?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  route?: Maybe<RouteRelationFilter>;
  routeId?: Maybe<IntFilter>;
  time?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ScoreLeadWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ScoreOutput = {
  __typename?: 'ScoreOutput';
  message: Scalars['String'];
  warning?: Maybe<Scalars['String']>;
};

export type ScoreSpeed = {
  __typename?: 'ScoreSpeed';
  comment?: Maybe<Comment>;
  commentId?: Maybe<Scalars['Int']>;
  competitor: Competitor;
  competitorId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  route: Route;
  routeId: Scalars['Int'];
  time: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ScoreSpeedAvgAggregate = {
  __typename?: 'ScoreSpeedAvgAggregate';
  commentId?: Maybe<Scalars['Float']>;
  competitorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  routeId?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
};

export type ScoreSpeedAvgOrderByAggregateInput = {
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
};

export type ScoreSpeedCountAggregate = {
  __typename?: 'ScoreSpeedCountAggregate';
  _all: Scalars['Int'];
  commentId: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  routeId: Scalars['Int'];
  time: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ScoreSpeedCountOrderByAggregateInput = {
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ScoreSpeedCreateInput = {
  comment?: Maybe<CommentCreateNestedOneWithoutScoresSpeedInput>;
  competitor: CompetitorCreateNestedOneWithoutScoresSpeedInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  route: RouteCreateNestedOneWithoutScoreSpeedInput;
  time: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreSpeedCreateManyCommentInput = {
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  routeId: Scalars['Int'];
  time: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreSpeedCreateManyCommentInputEnvelope = {
  data: Array<ScoreSpeedCreateManyCommentInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ScoreSpeedCreateManyCompetitorInput = {
  commentId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  routeId: Scalars['Int'];
  time: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreSpeedCreateManyCompetitorInputEnvelope = {
  data: Array<ScoreSpeedCreateManyCompetitorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ScoreSpeedCreateManyInput = {
  commentId?: Maybe<Scalars['Int']>;
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  routeId: Scalars['Int'];
  time: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreSpeedCreateManyRouteInput = {
  commentId?: Maybe<Scalars['Int']>;
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  time: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreSpeedCreateManyRouteInputEnvelope = {
  data: Array<ScoreSpeedCreateManyRouteInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ScoreSpeedCreateNestedManyWithoutCommentInput = {
  connect?: Maybe<Array<ScoreSpeedWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ScoreSpeedCreateOrConnectWithoutCommentInput>>;
  create?: Maybe<Array<ScoreSpeedCreateWithoutCommentInput>>;
  createMany?: Maybe<ScoreSpeedCreateManyCommentInputEnvelope>;
};

export type ScoreSpeedCreateNestedManyWithoutCompetitorInput = {
  connect?: Maybe<Array<ScoreSpeedWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<ScoreSpeedCreateOrConnectWithoutCompetitorInput>
  >;
  create?: Maybe<Array<ScoreSpeedCreateWithoutCompetitorInput>>;
  createMany?: Maybe<ScoreSpeedCreateManyCompetitorInputEnvelope>;
};

export type ScoreSpeedCreateNestedManyWithoutRouteInput = {
  connect?: Maybe<Array<ScoreSpeedWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ScoreSpeedCreateOrConnectWithoutRouteInput>>;
  create?: Maybe<Array<ScoreSpeedCreateWithoutRouteInput>>;
  createMany?: Maybe<ScoreSpeedCreateManyRouteInputEnvelope>;
};

export type ScoreSpeedCreateOrConnectWithoutCommentInput = {
  create: ScoreSpeedCreateWithoutCommentInput;
  where: ScoreSpeedWhereUniqueInput;
};

export type ScoreSpeedCreateOrConnectWithoutCompetitorInput = {
  create: ScoreSpeedCreateWithoutCompetitorInput;
  where: ScoreSpeedWhereUniqueInput;
};

export type ScoreSpeedCreateOrConnectWithoutRouteInput = {
  create: ScoreSpeedCreateWithoutRouteInput;
  where: ScoreSpeedWhereUniqueInput;
};

export type ScoreSpeedCreateWithoutCommentInput = {
  competitor: CompetitorCreateNestedOneWithoutScoresSpeedInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  route: RouteCreateNestedOneWithoutScoreSpeedInput;
  time: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreSpeedCreateWithoutCompetitorInput = {
  comment?: Maybe<CommentCreateNestedOneWithoutScoresSpeedInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  route: RouteCreateNestedOneWithoutScoreSpeedInput;
  time: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreSpeedCreateWithoutRouteInput = {
  comment?: Maybe<CommentCreateNestedOneWithoutScoresSpeedInput>;
  competitor: CompetitorCreateNestedOneWithoutScoresSpeedInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  time: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreSpeedGroupBy = {
  __typename?: 'ScoreSpeedGroupBy';
  _avg?: Maybe<ScoreSpeedAvgAggregate>;
  _count?: Maybe<ScoreSpeedCountAggregate>;
  _max?: Maybe<ScoreSpeedMaxAggregate>;
  _min?: Maybe<ScoreSpeedMinAggregate>;
  _sum?: Maybe<ScoreSpeedSumAggregate>;
  commentId?: Maybe<Scalars['Int']>;
  competitorId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  routeId: Scalars['Int'];
  time: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ScoreSpeedListRelationFilter = {
  every?: Maybe<ScoreSpeedWhereInput>;
  none?: Maybe<ScoreSpeedWhereInput>;
  some?: Maybe<ScoreSpeedWhereInput>;
};

export type ScoreSpeedMaxAggregate = {
  __typename?: 'ScoreSpeedMaxAggregate';
  commentId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  routeId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreSpeedMaxOrderByAggregateInput = {
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ScoreSpeedMinAggregate = {
  __typename?: 'ScoreSpeedMinAggregate';
  commentId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  routeId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreSpeedMinOrderByAggregateInput = {
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ScoreSpeedOrderByInput = {
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ScoreSpeedOrderByWithAggregationInput = {
  _avg?: Maybe<ScoreSpeedAvgOrderByAggregateInput>;
  _count?: Maybe<ScoreSpeedCountOrderByAggregateInput>;
  _max?: Maybe<ScoreSpeedMaxOrderByAggregateInput>;
  _min?: Maybe<ScoreSpeedMinOrderByAggregateInput>;
  _sum?: Maybe<ScoreSpeedSumOrderByAggregateInput>;
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum ScoreSpeedScalarFieldEnum {
  CommentId = 'commentId',
  CompetitorId = 'competitorId',
  CreatedAt = 'createdAt',
  Id = 'id',
  RouteId = 'routeId',
  Time = 'time',
  UpdatedAt = 'updatedAt',
}

export type ScoreSpeedScalarWhereInput = {
  AND?: Maybe<Array<ScoreSpeedScalarWhereInput>>;
  NOT?: Maybe<Array<ScoreSpeedScalarWhereInput>>;
  OR?: Maybe<Array<ScoreSpeedScalarWhereInput>>;
  commentId?: Maybe<IntNullableFilter>;
  competitorId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  routeId?: Maybe<IntFilter>;
  time?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ScoreSpeedScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ScoreSpeedScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ScoreSpeedScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ScoreSpeedScalarWhereWithAggregatesInput>>;
  commentId?: Maybe<IntNullableWithAggregatesFilter>;
  competitorId?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  routeId?: Maybe<IntWithAggregatesFilter>;
  time?: Maybe<IntWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type ScoreSpeedSumAggregate = {
  __typename?: 'ScoreSpeedSumAggregate';
  commentId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  routeId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
};

export type ScoreSpeedSumOrderByAggregateInput = {
  commentId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  routeId?: Maybe<SortOrder>;
  time?: Maybe<SortOrder>;
};

export type ScoreSpeedUpdateInput = {
  comment?: Maybe<CommentUpdateOneWithoutScoresSpeedInput>;
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutScoresSpeedInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  route?: Maybe<RouteUpdateOneRequiredWithoutScoreSpeedInput>;
  time?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScoreSpeedUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  time?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScoreSpeedUpdateManyWithWhereWithoutCommentInput = {
  data: ScoreSpeedUpdateManyMutationInput;
  where: ScoreSpeedScalarWhereInput;
};

export type ScoreSpeedUpdateManyWithWhereWithoutCompetitorInput = {
  data: ScoreSpeedUpdateManyMutationInput;
  where: ScoreSpeedScalarWhereInput;
};

export type ScoreSpeedUpdateManyWithWhereWithoutRouteInput = {
  data: ScoreSpeedUpdateManyMutationInput;
  where: ScoreSpeedScalarWhereInput;
};

export type ScoreSpeedUpdateManyWithoutCommentInput = {
  connect?: Maybe<Array<ScoreSpeedWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ScoreSpeedCreateOrConnectWithoutCommentInput>>;
  create?: Maybe<Array<ScoreSpeedCreateWithoutCommentInput>>;
  createMany?: Maybe<ScoreSpeedCreateManyCommentInputEnvelope>;
  delete?: Maybe<Array<ScoreSpeedWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ScoreSpeedScalarWhereInput>>;
  disconnect?: Maybe<Array<ScoreSpeedWhereUniqueInput>>;
  set?: Maybe<Array<ScoreSpeedWhereUniqueInput>>;
  update?: Maybe<Array<ScoreSpeedUpdateWithWhereUniqueWithoutCommentInput>>;
  updateMany?: Maybe<Array<ScoreSpeedUpdateManyWithWhereWithoutCommentInput>>;
  upsert?: Maybe<Array<ScoreSpeedUpsertWithWhereUniqueWithoutCommentInput>>;
};

export type ScoreSpeedUpdateManyWithoutCompetitorInput = {
  connect?: Maybe<Array<ScoreSpeedWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<ScoreSpeedCreateOrConnectWithoutCompetitorInput>
  >;
  create?: Maybe<Array<ScoreSpeedCreateWithoutCompetitorInput>>;
  createMany?: Maybe<ScoreSpeedCreateManyCompetitorInputEnvelope>;
  delete?: Maybe<Array<ScoreSpeedWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ScoreSpeedScalarWhereInput>>;
  disconnect?: Maybe<Array<ScoreSpeedWhereUniqueInput>>;
  set?: Maybe<Array<ScoreSpeedWhereUniqueInput>>;
  update?: Maybe<Array<ScoreSpeedUpdateWithWhereUniqueWithoutCompetitorInput>>;
  updateMany?: Maybe<
    Array<ScoreSpeedUpdateManyWithWhereWithoutCompetitorInput>
  >;
  upsert?: Maybe<Array<ScoreSpeedUpsertWithWhereUniqueWithoutCompetitorInput>>;
};

export type ScoreSpeedUpdateManyWithoutRouteInput = {
  connect?: Maybe<Array<ScoreSpeedWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ScoreSpeedCreateOrConnectWithoutRouteInput>>;
  create?: Maybe<Array<ScoreSpeedCreateWithoutRouteInput>>;
  createMany?: Maybe<ScoreSpeedCreateManyRouteInputEnvelope>;
  delete?: Maybe<Array<ScoreSpeedWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ScoreSpeedScalarWhereInput>>;
  disconnect?: Maybe<Array<ScoreSpeedWhereUniqueInput>>;
  set?: Maybe<Array<ScoreSpeedWhereUniqueInput>>;
  update?: Maybe<Array<ScoreSpeedUpdateWithWhereUniqueWithoutRouteInput>>;
  updateMany?: Maybe<Array<ScoreSpeedUpdateManyWithWhereWithoutRouteInput>>;
  upsert?: Maybe<Array<ScoreSpeedUpsertWithWhereUniqueWithoutRouteInput>>;
};

export type ScoreSpeedUpdateWithWhereUniqueWithoutCommentInput = {
  data: ScoreSpeedUpdateWithoutCommentInput;
  where: ScoreSpeedWhereUniqueInput;
};

export type ScoreSpeedUpdateWithWhereUniqueWithoutCompetitorInput = {
  data: ScoreSpeedUpdateWithoutCompetitorInput;
  where: ScoreSpeedWhereUniqueInput;
};

export type ScoreSpeedUpdateWithWhereUniqueWithoutRouteInput = {
  data: ScoreSpeedUpdateWithoutRouteInput;
  where: ScoreSpeedWhereUniqueInput;
};

export type ScoreSpeedUpdateWithoutCommentInput = {
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutScoresSpeedInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  route?: Maybe<RouteUpdateOneRequiredWithoutScoreSpeedInput>;
  time?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScoreSpeedUpdateWithoutCompetitorInput = {
  comment?: Maybe<CommentUpdateOneWithoutScoresSpeedInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  route?: Maybe<RouteUpdateOneRequiredWithoutScoreSpeedInput>;
  time?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScoreSpeedUpdateWithoutRouteInput = {
  comment?: Maybe<CommentUpdateOneWithoutScoresSpeedInput>;
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutScoresSpeedInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  time?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScoreSpeedUpsertWithWhereUniqueWithoutCommentInput = {
  create: ScoreSpeedCreateWithoutCommentInput;
  update: ScoreSpeedUpdateWithoutCommentInput;
  where: ScoreSpeedWhereUniqueInput;
};

export type ScoreSpeedUpsertWithWhereUniqueWithoutCompetitorInput = {
  create: ScoreSpeedCreateWithoutCompetitorInput;
  update: ScoreSpeedUpdateWithoutCompetitorInput;
  where: ScoreSpeedWhereUniqueInput;
};

export type ScoreSpeedUpsertWithWhereUniqueWithoutRouteInput = {
  create: ScoreSpeedCreateWithoutRouteInput;
  update: ScoreSpeedUpdateWithoutRouteInput;
  where: ScoreSpeedWhereUniqueInput;
};

export type ScoreSpeedWhereInput = {
  AND?: Maybe<Array<ScoreSpeedWhereInput>>;
  NOT?: Maybe<Array<ScoreSpeedWhereInput>>;
  OR?: Maybe<Array<ScoreSpeedWhereInput>>;
  comment?: Maybe<CommentRelationFilter>;
  commentId?: Maybe<IntNullableFilter>;
  competitor?: Maybe<CompetitorRelationFilter>;
  competitorId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  route?: Maybe<RouteRelationFilter>;
  routeId?: Maybe<IntFilter>;
  time?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ScoreSpeedWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Season = {
  __typename?: 'Season';
  competitions: Array<Competition>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  stardDate: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  year: Scalars['Int'];
};

export type SeasonCompetitionsArgs = {
  cursor?: Maybe<CompetitionWhereUniqueInput>;
  distinct?: Maybe<Array<CompetitionScalarFieldEnum>>;
  orderBy?: Maybe<Array<CompetitionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompetitionWhereInput>;
};

export type SeasonAvgAggregate = {
  __typename?: 'SeasonAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

export type SeasonAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type SeasonCountAggregate = {
  __typename?: 'SeasonCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  endDate: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  stardDate: Scalars['Int'];
  updatedAt: Scalars['Int'];
  year: Scalars['Int'];
};

export type SeasonCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  stardDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type SeasonCreateInput = {
  competitions?: Maybe<CompetitionCreateNestedManyWithoutSeasonInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  name: Scalars['String'];
  stardDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type SeasonCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  stardDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type SeasonCreateNestedOneWithoutCompetitionsInput = {
  connect?: Maybe<SeasonWhereUniqueInput>;
  connectOrCreate?: Maybe<SeasonCreateOrConnectWithoutCompetitionsInput>;
  create?: Maybe<SeasonCreateWithoutCompetitionsInput>;
};

export type SeasonCreateOrConnectWithoutCompetitionsInput = {
  create: SeasonCreateWithoutCompetitionsInput;
  where: SeasonWhereUniqueInput;
};

export type SeasonCreateWithoutCompetitionsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  name: Scalars['String'];
  stardDate: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type SeasonGroupBy = {
  __typename?: 'SeasonGroupBy';
  _avg?: Maybe<SeasonAvgAggregate>;
  _count?: Maybe<SeasonCountAggregate>;
  _max?: Maybe<SeasonMaxAggregate>;
  _min?: Maybe<SeasonMinAggregate>;
  _sum?: Maybe<SeasonSumAggregate>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  stardDate: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  year: Scalars['Int'];
};

export type SeasonMaxAggregate = {
  __typename?: 'SeasonMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  stardDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year?: Maybe<Scalars['Int']>;
};

export type SeasonMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  stardDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type SeasonMinAggregate = {
  __typename?: 'SeasonMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  stardDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year?: Maybe<Scalars['Int']>;
};

export type SeasonMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  stardDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type SeasonOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  stardDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type SeasonOrderByWithAggregationInput = {
  _avg?: Maybe<SeasonAvgOrderByAggregateInput>;
  _count?: Maybe<SeasonCountOrderByAggregateInput>;
  _max?: Maybe<SeasonMaxOrderByAggregateInput>;
  _min?: Maybe<SeasonMinOrderByAggregateInput>;
  _sum?: Maybe<SeasonSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  endDate?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  stardDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type SeasonRelationFilter = {
  is?: Maybe<SeasonWhereInput>;
  isNot?: Maybe<SeasonWhereInput>;
};

export enum SeasonScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  EndDate = 'endDate',
  Id = 'id',
  Name = 'name',
  StardDate = 'stardDate',
  UpdatedAt = 'updatedAt',
  Year = 'year',
}

export type SeasonScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<SeasonScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<SeasonScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<SeasonScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  description?: Maybe<StringNullableWithAggregatesFilter>;
  endDate?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  stardDate?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  year?: Maybe<IntWithAggregatesFilter>;
};

export type SeasonSumAggregate = {
  __typename?: 'SeasonSumAggregate';
  id?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type SeasonSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type SeasonUpdateInput = {
  competitions?: Maybe<CompetitionUpdateManyWithoutSeasonInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  stardDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type SeasonUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  stardDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type SeasonUpdateOneRequiredWithoutCompetitionsInput = {
  connect?: Maybe<SeasonWhereUniqueInput>;
  connectOrCreate?: Maybe<SeasonCreateOrConnectWithoutCompetitionsInput>;
  create?: Maybe<SeasonCreateWithoutCompetitionsInput>;
  update?: Maybe<SeasonUpdateWithoutCompetitionsInput>;
  upsert?: Maybe<SeasonUpsertWithoutCompetitionsInput>;
};

export type SeasonUpdateWithoutCompetitionsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  endDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  stardDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type SeasonUpsertWithoutCompetitionsInput = {
  create: SeasonCreateWithoutCompetitionsInput;
  update: SeasonUpdateWithoutCompetitionsInput;
};

export type SeasonWhereInput = {
  AND?: Maybe<Array<SeasonWhereInput>>;
  NOT?: Maybe<Array<SeasonWhereInput>>;
  OR?: Maybe<Array<SeasonWhereInput>>;
  competitions?: Maybe<CompetitionListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  endDate?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  stardDate?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  year?: Maybe<IntFilter>;
};

export type SeasonWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StartList = {
  __typename?: 'StartList';
  competition: Competition;
  competitionId: Scalars['Int'];
  competitor: Competitor;
  competitorId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  startNumber: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type StartListAvgAggregate = {
  __typename?: 'StartListAvgAggregate';
  competitionId?: Maybe<Scalars['Float']>;
  competitorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  startNumber?: Maybe<Scalars['Float']>;
};

export type StartListAvgOrderByAggregateInput = {
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  startNumber?: Maybe<SortOrder>;
};

export type StartListCountAggregate = {
  __typename?: 'StartListCountAggregate';
  _all: Scalars['Int'];
  competitionId: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  startNumber: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type StartListCountOrderByAggregateInput = {
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  startNumber?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type StartListCreateInput = {
  competition: CompetitionCreateNestedOneWithoutStartListsInput;
  competitor: CompetitorCreateNestedOneWithoutStartListsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  startNumber: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StartListCreateManyCompetitionInput = {
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  startNumber: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StartListCreateManyCompetitionInputEnvelope = {
  data: Array<StartListCreateManyCompetitionInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StartListCreateManyCompetitorInput = {
  competitionId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  startNumber: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StartListCreateManyCompetitorInputEnvelope = {
  data: Array<StartListCreateManyCompetitorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type StartListCreateManyInput = {
  competitionId: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  startNumber: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StartListCreateNestedManyWithoutCompetitionInput = {
  connect?: Maybe<Array<StartListWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<StartListCreateOrConnectWithoutCompetitionInput>
  >;
  create?: Maybe<Array<StartListCreateWithoutCompetitionInput>>;
  createMany?: Maybe<StartListCreateManyCompetitionInputEnvelope>;
};

export type StartListCreateNestedManyWithoutCompetitorInput = {
  connect?: Maybe<Array<StartListWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<StartListCreateOrConnectWithoutCompetitorInput>
  >;
  create?: Maybe<Array<StartListCreateWithoutCompetitorInput>>;
  createMany?: Maybe<StartListCreateManyCompetitorInputEnvelope>;
};

export type StartListCreateOrConnectWithoutCompetitionInput = {
  create: StartListCreateWithoutCompetitionInput;
  where: StartListWhereUniqueInput;
};

export type StartListCreateOrConnectWithoutCompetitorInput = {
  create: StartListCreateWithoutCompetitorInput;
  where: StartListWhereUniqueInput;
};

export type StartListCreateWithoutCompetitionInput = {
  competitor: CompetitorCreateNestedOneWithoutStartListsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  startNumber: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StartListCreateWithoutCompetitorInput = {
  competition: CompetitionCreateNestedOneWithoutStartListsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  startNumber: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StartListGroupBy = {
  __typename?: 'StartListGroupBy';
  _avg?: Maybe<StartListAvgAggregate>;
  _count?: Maybe<StartListCountAggregate>;
  _max?: Maybe<StartListMaxAggregate>;
  _min?: Maybe<StartListMinAggregate>;
  _sum?: Maybe<StartListSumAggregate>;
  competitionId: Scalars['Int'];
  competitorId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  startNumber: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type StartListListRelationFilter = {
  every?: Maybe<StartListWhereInput>;
  none?: Maybe<StartListWhereInput>;
  some?: Maybe<StartListWhereInput>;
};

export type StartListMaxAggregate = {
  __typename?: 'StartListMaxAggregate';
  competitionId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  startNumber?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StartListMaxOrderByAggregateInput = {
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  startNumber?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type StartListMinAggregate = {
  __typename?: 'StartListMinAggregate';
  competitionId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  startNumber?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StartListMinOrderByAggregateInput = {
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  startNumber?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type StartListOrderByInput = {
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  startNumber?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type StartListOrderByWithAggregationInput = {
  _avg?: Maybe<StartListAvgOrderByAggregateInput>;
  _count?: Maybe<StartListCountOrderByAggregateInput>;
  _max?: Maybe<StartListMaxOrderByAggregateInput>;
  _min?: Maybe<StartListMinOrderByAggregateInput>;
  _sum?: Maybe<StartListSumOrderByAggregateInput>;
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  startNumber?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum StartListScalarFieldEnum {
  CompetitionId = 'competitionId',
  CompetitorId = 'competitorId',
  CreatedAt = 'createdAt',
  Id = 'id',
  StartNumber = 'startNumber',
  UpdatedAt = 'updatedAt',
}

export type StartListScalarWhereInput = {
  AND?: Maybe<Array<StartListScalarWhereInput>>;
  NOT?: Maybe<Array<StartListScalarWhereInput>>;
  OR?: Maybe<Array<StartListScalarWhereInput>>;
  competitionId?: Maybe<IntFilter>;
  competitorId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  startNumber?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type StartListScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<StartListScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<StartListScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<StartListScalarWhereWithAggregatesInput>>;
  competitionId?: Maybe<IntWithAggregatesFilter>;
  competitorId?: Maybe<IntWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  startNumber?: Maybe<IntWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type StartListSumAggregate = {
  __typename?: 'StartListSumAggregate';
  competitionId?: Maybe<Scalars['Int']>;
  competitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  startNumber?: Maybe<Scalars['Int']>;
};

export type StartListSumOrderByAggregateInput = {
  competitionId?: Maybe<SortOrder>;
  competitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  startNumber?: Maybe<SortOrder>;
};

export type StartListUpdateInput = {
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutStartListsInput>;
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutStartListsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startNumber?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StartListUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startNumber?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StartListUpdateManyWithWhereWithoutCompetitionInput = {
  data: StartListUpdateManyMutationInput;
  where: StartListScalarWhereInput;
};

export type StartListUpdateManyWithWhereWithoutCompetitorInput = {
  data: StartListUpdateManyMutationInput;
  where: StartListScalarWhereInput;
};

export type StartListUpdateManyWithoutCompetitionInput = {
  connect?: Maybe<Array<StartListWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<StartListCreateOrConnectWithoutCompetitionInput>
  >;
  create?: Maybe<Array<StartListCreateWithoutCompetitionInput>>;
  createMany?: Maybe<StartListCreateManyCompetitionInputEnvelope>;
  delete?: Maybe<Array<StartListWhereUniqueInput>>;
  deleteMany?: Maybe<Array<StartListScalarWhereInput>>;
  disconnect?: Maybe<Array<StartListWhereUniqueInput>>;
  set?: Maybe<Array<StartListWhereUniqueInput>>;
  update?: Maybe<Array<StartListUpdateWithWhereUniqueWithoutCompetitionInput>>;
  updateMany?: Maybe<
    Array<StartListUpdateManyWithWhereWithoutCompetitionInput>
  >;
  upsert?: Maybe<Array<StartListUpsertWithWhereUniqueWithoutCompetitionInput>>;
};

export type StartListUpdateManyWithoutCompetitorInput = {
  connect?: Maybe<Array<StartListWhereUniqueInput>>;
  connectOrCreate?: Maybe<
    Array<StartListCreateOrConnectWithoutCompetitorInput>
  >;
  create?: Maybe<Array<StartListCreateWithoutCompetitorInput>>;
  createMany?: Maybe<StartListCreateManyCompetitorInputEnvelope>;
  delete?: Maybe<Array<StartListWhereUniqueInput>>;
  deleteMany?: Maybe<Array<StartListScalarWhereInput>>;
  disconnect?: Maybe<Array<StartListWhereUniqueInput>>;
  set?: Maybe<Array<StartListWhereUniqueInput>>;
  update?: Maybe<Array<StartListUpdateWithWhereUniqueWithoutCompetitorInput>>;
  updateMany?: Maybe<Array<StartListUpdateManyWithWhereWithoutCompetitorInput>>;
  upsert?: Maybe<Array<StartListUpsertWithWhereUniqueWithoutCompetitorInput>>;
};

export type StartListUpdateWithWhereUniqueWithoutCompetitionInput = {
  data: StartListUpdateWithoutCompetitionInput;
  where: StartListWhereUniqueInput;
};

export type StartListUpdateWithWhereUniqueWithoutCompetitorInput = {
  data: StartListUpdateWithoutCompetitorInput;
  where: StartListWhereUniqueInput;
};

export type StartListUpdateWithoutCompetitionInput = {
  competitor?: Maybe<CompetitorUpdateOneRequiredWithoutStartListsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startNumber?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StartListUpdateWithoutCompetitorInput = {
  competition?: Maybe<CompetitionUpdateOneRequiredWithoutStartListsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  startNumber?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type StartListUpsertWithWhereUniqueWithoutCompetitionInput = {
  create: StartListCreateWithoutCompetitionInput;
  update: StartListUpdateWithoutCompetitionInput;
  where: StartListWhereUniqueInput;
};

export type StartListUpsertWithWhereUniqueWithoutCompetitorInput = {
  create: StartListCreateWithoutCompetitorInput;
  update: StartListUpdateWithoutCompetitorInput;
  where: StartListWhereUniqueInput;
};

export type StartListWhereInput = {
  AND?: Maybe<Array<StartListWhereInput>>;
  NOT?: Maybe<Array<StartListWhereInput>>;
  OR?: Maybe<Array<StartListWhereInput>>;
  competition?: Maybe<CompetitionRelationFilter>;
  competitionId?: Maybe<IntFilter>;
  competitor?: Maybe<CompetitorRelationFilter>;
  competitorId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  startNumber?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type StartListWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  acceptances: Array<Registration>;
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['Int']>;
  password: Scalars['String'];
  publicId: Scalars['String'];
  registrations: Array<Registration>;
  results: Array<Result>;
  role: UserRole;
  routesJudged: Array<Route>;
  routesSet: Array<Route>;
  updatedAt: Scalars['DateTime'];
};

export type UserAcceptancesArgs = {
  cursor?: Maybe<RegistrationWhereUniqueInput>;
  distinct?: Maybe<Array<RegistrationScalarFieldEnum>>;
  orderBy?: Maybe<Array<RegistrationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RegistrationWhereInput>;
};

export type UserCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<Array<CommentScalarFieldEnum>>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type UserRegistrationsArgs = {
  cursor?: Maybe<RegistrationWhereUniqueInput>;
  distinct?: Maybe<Array<RegistrationScalarFieldEnum>>;
  orderBy?: Maybe<Array<RegistrationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RegistrationWhereInput>;
};

export type UserResultsArgs = {
  cursor?: Maybe<ResultWhereUniqueInput>;
  distinct?: Maybe<Array<ResultScalarFieldEnum>>;
  orderBy?: Maybe<Array<ResultOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ResultWhereInput>;
};

export type UserRoutesJudgedArgs = {
  cursor?: Maybe<RouteWhereUniqueInput>;
  distinct?: Maybe<Array<RouteScalarFieldEnum>>;
  orderBy?: Maybe<Array<RouteOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RouteWhereInput>;
};

export type UserRoutesSetArgs = {
  cursor?: Maybe<RouteWhereUniqueInput>;
  distinct?: Maybe<Array<RouteScalarFieldEnum>>;
  orderBy?: Maybe<Array<RouteOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RouteWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
  locationId: Scalars['Int'];
  password: Scalars['Int'];
  publicId: Scalars['Int'];
  role: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  publicId?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserCreateInput = {
  acceptances?: Maybe<RegistrationCreateNestedManyWithoutAcceptorInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location?: Maybe<LocationCreateNestedOneWithoutUsersInput>;
  password: Scalars['String'];
  publicId?: Maybe<Scalars['String']>;
  registrations?: Maybe<RegistrationCreateNestedManyWithoutRegistrantInput>;
  results?: Maybe<ResultCreateNestedManyWithoutApprovedByInput>;
  role?: Maybe<UserRole>;
  routesJudged?: Maybe<RouteCreateNestedManyWithoutJudgeInput>;
  routesSet?: Maybe<RouteCreateNestedManyWithoutSetterInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  locationId?: Maybe<Scalars['Int']>;
  password: Scalars['String'];
  publicId?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateManyLocationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  password: Scalars['String'];
  publicId?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateManyLocationInputEnvelope = {
  data: Array<UserCreateManyLocationInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserCreateNestedManyWithoutLocationInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutLocationInput>>;
  create?: Maybe<Array<UserCreateWithoutLocationInput>>;
  createMany?: Maybe<UserCreateManyLocationInputEnvelope>;
};

export type UserCreateNestedOneWithoutAcceptancesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAcceptancesInput>;
  create?: Maybe<UserCreateWithoutAcceptancesInput>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<UserCreateWithoutCommentsInput>;
};

export type UserCreateNestedOneWithoutRegistrationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutRegistrationsInput>;
  create?: Maybe<UserCreateWithoutRegistrationsInput>;
};

export type UserCreateNestedOneWithoutResultsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutResultsInput>;
  create?: Maybe<UserCreateWithoutResultsInput>;
};

export type UserCreateNestedOneWithoutRoutesJudgedInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutRoutesJudgedInput>;
  create?: Maybe<UserCreateWithoutRoutesJudgedInput>;
};

export type UserCreateNestedOneWithoutRoutesSetInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutRoutesSetInput>;
  create?: Maybe<UserCreateWithoutRoutesSetInput>;
};

export type UserCreateOrConnectWithoutAcceptancesInput = {
  create: UserCreateWithoutAcceptancesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLocationInput = {
  create: UserCreateWithoutLocationInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRegistrationsInput = {
  create: UserCreateWithoutRegistrationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutResultsInput = {
  create: UserCreateWithoutResultsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRoutesJudgedInput = {
  create: UserCreateWithoutRoutesJudgedInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRoutesSetInput = {
  create: UserCreateWithoutRoutesSetInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAcceptancesInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location?: Maybe<LocationCreateNestedOneWithoutUsersInput>;
  password: Scalars['String'];
  publicId?: Maybe<Scalars['String']>;
  registrations?: Maybe<RegistrationCreateNestedManyWithoutRegistrantInput>;
  results?: Maybe<ResultCreateNestedManyWithoutApprovedByInput>;
  role?: Maybe<UserRole>;
  routesJudged?: Maybe<RouteCreateNestedManyWithoutJudgeInput>;
  routesSet?: Maybe<RouteCreateNestedManyWithoutSetterInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutCommentsInput = {
  acceptances?: Maybe<RegistrationCreateNestedManyWithoutAcceptorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location?: Maybe<LocationCreateNestedOneWithoutUsersInput>;
  password: Scalars['String'];
  publicId?: Maybe<Scalars['String']>;
  registrations?: Maybe<RegistrationCreateNestedManyWithoutRegistrantInput>;
  results?: Maybe<ResultCreateNestedManyWithoutApprovedByInput>;
  role?: Maybe<UserRole>;
  routesJudged?: Maybe<RouteCreateNestedManyWithoutJudgeInput>;
  routesSet?: Maybe<RouteCreateNestedManyWithoutSetterInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutLocationInput = {
  acceptances?: Maybe<RegistrationCreateNestedManyWithoutAcceptorInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  publicId?: Maybe<Scalars['String']>;
  registrations?: Maybe<RegistrationCreateNestedManyWithoutRegistrantInput>;
  results?: Maybe<ResultCreateNestedManyWithoutApprovedByInput>;
  role?: Maybe<UserRole>;
  routesJudged?: Maybe<RouteCreateNestedManyWithoutJudgeInput>;
  routesSet?: Maybe<RouteCreateNestedManyWithoutSetterInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutRegistrationsInput = {
  acceptances?: Maybe<RegistrationCreateNestedManyWithoutAcceptorInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location?: Maybe<LocationCreateNestedOneWithoutUsersInput>;
  password: Scalars['String'];
  publicId?: Maybe<Scalars['String']>;
  results?: Maybe<ResultCreateNestedManyWithoutApprovedByInput>;
  role?: Maybe<UserRole>;
  routesJudged?: Maybe<RouteCreateNestedManyWithoutJudgeInput>;
  routesSet?: Maybe<RouteCreateNestedManyWithoutSetterInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutResultsInput = {
  acceptances?: Maybe<RegistrationCreateNestedManyWithoutAcceptorInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location?: Maybe<LocationCreateNestedOneWithoutUsersInput>;
  password: Scalars['String'];
  publicId?: Maybe<Scalars['String']>;
  registrations?: Maybe<RegistrationCreateNestedManyWithoutRegistrantInput>;
  role?: Maybe<UserRole>;
  routesJudged?: Maybe<RouteCreateNestedManyWithoutJudgeInput>;
  routesSet?: Maybe<RouteCreateNestedManyWithoutSetterInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutRoutesJudgedInput = {
  acceptances?: Maybe<RegistrationCreateNestedManyWithoutAcceptorInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location?: Maybe<LocationCreateNestedOneWithoutUsersInput>;
  password: Scalars['String'];
  publicId?: Maybe<Scalars['String']>;
  registrations?: Maybe<RegistrationCreateNestedManyWithoutRegistrantInput>;
  results?: Maybe<ResultCreateNestedManyWithoutApprovedByInput>;
  role?: Maybe<UserRole>;
  routesSet?: Maybe<RouteCreateNestedManyWithoutSetterInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutRoutesSetInput = {
  acceptances?: Maybe<RegistrationCreateNestedManyWithoutAcceptorInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location?: Maybe<LocationCreateNestedOneWithoutUsersInput>;
  password: Scalars['String'];
  publicId?: Maybe<Scalars['String']>;
  registrations?: Maybe<RegistrationCreateNestedManyWithoutRegistrantInput>;
  results?: Maybe<ResultCreateNestedManyWithoutApprovedByInput>;
  role?: Maybe<UserRole>;
  routesJudged?: Maybe<RouteCreateNestedManyWithoutJudgeInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  locationId?: Maybe<Scalars['Int']>;
  password: Scalars['String'];
  publicId: Scalars['String'];
  role: UserRole;
  updatedAt: Scalars['DateTime'];
};

export type UserInfo = {
  __typename?: 'UserInfo';
  route?: Maybe<Route>;
  user: User;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  publicId?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  locationId?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  publicId?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  publicId?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: Maybe<UserAvgOrderByAggregateInput>;
  _count?: Maybe<UserCountOrderByAggregateInput>;
  _max?: Maybe<UserMaxOrderByAggregateInput>;
  _min?: Maybe<UserMinOrderByAggregateInput>;
  _sum?: Maybe<UserSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  publicId?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserRole {
  Administrator = 'ADMINISTRATOR',
  Judge = 'JUDGE',
  Moderator = 'MODERATOR',
  User = 'USER',
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  LocationId = 'locationId',
  Password = 'password',
  PublicId = 'publicId',
  Role = 'role',
  UpdatedAt = 'updatedAt',
}

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  firstName?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  lastName?: Maybe<StringFilter>;
  locationId?: Maybe<IntNullableFilter>;
  password?: Maybe<StringFilter>;
  publicId?: Maybe<StringFilter>;
  role?: Maybe<EnumUserRoleFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  firstName?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  lastName?: Maybe<StringWithAggregatesFilter>;
  locationId?: Maybe<IntNullableWithAggregatesFilter>;
  password?: Maybe<StringWithAggregatesFilter>;
  publicId?: Maybe<StringWithAggregatesFilter>;
  role?: Maybe<EnumUserRoleWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  locationId?: Maybe<SortOrder>;
};

export type UserUpdateInput = {
  acceptances?: Maybe<RegistrationUpdateManyWithoutAcceptorInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneWithoutUsersInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutRegistrantInput>;
  results?: Maybe<ResultUpdateManyWithoutApprovedByInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  routesJudged?: Maybe<RouteUpdateManyWithoutJudgeInput>;
  routesSet?: Maybe<RouteUpdateManyWithoutSetterInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutLocationInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutLocationInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutLocationInput>>;
  create?: Maybe<Array<UserCreateWithoutLocationInput>>;
  createMany?: Maybe<UserCreateManyLocationInputEnvelope>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutLocationInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutLocationInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutLocationInput>>;
};

export type UserUpdateOneRequiredWithoutAcceptancesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAcceptancesInput>;
  create?: Maybe<UserCreateWithoutAcceptancesInput>;
  update?: Maybe<UserUpdateWithoutAcceptancesInput>;
  upsert?: Maybe<UserUpsertWithoutAcceptancesInput>;
};

export type UserUpdateOneRequiredWithoutRegistrationsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutRegistrationsInput>;
  create?: Maybe<UserCreateWithoutRegistrationsInput>;
  update?: Maybe<UserUpdateWithoutRegistrationsInput>;
  upsert?: Maybe<UserUpsertWithoutRegistrationsInput>;
};

export type UserUpdateOneRequiredWithoutResultsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutResultsInput>;
  create?: Maybe<UserCreateWithoutResultsInput>;
  update?: Maybe<UserUpdateWithoutResultsInput>;
  upsert?: Maybe<UserUpsertWithoutResultsInput>;
};

export type UserUpdateOneRequiredWithoutRoutesJudgedInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutRoutesJudgedInput>;
  create?: Maybe<UserCreateWithoutRoutesJudgedInput>;
  update?: Maybe<UserUpdateWithoutRoutesJudgedInput>;
  upsert?: Maybe<UserUpsertWithoutRoutesJudgedInput>;
};

export type UserUpdateOneRequiredWithoutRoutesSetInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutRoutesSetInput>;
  create?: Maybe<UserCreateWithoutRoutesSetInput>;
  update?: Maybe<UserUpdateWithoutRoutesSetInput>;
  upsert?: Maybe<UserUpsertWithoutRoutesSetInput>;
};

export type UserUpdateOneWithoutCommentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<UserCreateWithoutCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutCommentsInput>;
  upsert?: Maybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateWithWhereUniqueWithoutLocationInput = {
  data: UserUpdateWithoutLocationInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutAcceptancesInput = {
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneWithoutUsersInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutRegistrantInput>;
  results?: Maybe<ResultUpdateManyWithoutApprovedByInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  routesJudged?: Maybe<RouteUpdateManyWithoutJudgeInput>;
  routesSet?: Maybe<RouteUpdateManyWithoutSetterInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCommentsInput = {
  acceptances?: Maybe<RegistrationUpdateManyWithoutAcceptorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneWithoutUsersInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutRegistrantInput>;
  results?: Maybe<ResultUpdateManyWithoutApprovedByInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  routesJudged?: Maybe<RouteUpdateManyWithoutJudgeInput>;
  routesSet?: Maybe<RouteUpdateManyWithoutSetterInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutLocationInput = {
  acceptances?: Maybe<RegistrationUpdateManyWithoutAcceptorInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutRegistrantInput>;
  results?: Maybe<ResultUpdateManyWithoutApprovedByInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  routesJudged?: Maybe<RouteUpdateManyWithoutJudgeInput>;
  routesSet?: Maybe<RouteUpdateManyWithoutSetterInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRegistrationsInput = {
  acceptances?: Maybe<RegistrationUpdateManyWithoutAcceptorInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneWithoutUsersInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  results?: Maybe<ResultUpdateManyWithoutApprovedByInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  routesJudged?: Maybe<RouteUpdateManyWithoutJudgeInput>;
  routesSet?: Maybe<RouteUpdateManyWithoutSetterInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutResultsInput = {
  acceptances?: Maybe<RegistrationUpdateManyWithoutAcceptorInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneWithoutUsersInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutRegistrantInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  routesJudged?: Maybe<RouteUpdateManyWithoutJudgeInput>;
  routesSet?: Maybe<RouteUpdateManyWithoutSetterInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRoutesJudgedInput = {
  acceptances?: Maybe<RegistrationUpdateManyWithoutAcceptorInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneWithoutUsersInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutRegistrantInput>;
  results?: Maybe<ResultUpdateManyWithoutApprovedByInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  routesSet?: Maybe<RouteUpdateManyWithoutSetterInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRoutesSetInput = {
  acceptances?: Maybe<RegistrationUpdateManyWithoutAcceptorInput>;
  comments?: Maybe<CommentUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  location?: Maybe<LocationUpdateOneWithoutUsersInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  publicId?: Maybe<StringFieldUpdateOperationsInput>;
  registrations?: Maybe<RegistrationUpdateManyWithoutRegistrantInput>;
  results?: Maybe<ResultUpdateManyWithoutApprovedByInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  routesJudged?: Maybe<RouteUpdateManyWithoutJudgeInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutLocationInput = {
  create: UserCreateWithoutLocationInput;
  update: UserUpdateWithoutLocationInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutAcceptancesInput = {
  create: UserCreateWithoutAcceptancesInput;
  update: UserUpdateWithoutAcceptancesInput;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  update: UserUpdateWithoutCommentsInput;
};

export type UserUpsertWithoutRegistrationsInput = {
  create: UserCreateWithoutRegistrationsInput;
  update: UserUpdateWithoutRegistrationsInput;
};

export type UserUpsertWithoutResultsInput = {
  create: UserCreateWithoutResultsInput;
  update: UserUpdateWithoutResultsInput;
};

export type UserUpsertWithoutRoutesJudgedInput = {
  create: UserCreateWithoutRoutesJudgedInput;
  update: UserUpdateWithoutRoutesJudgedInput;
};

export type UserUpsertWithoutRoutesSetInput = {
  create: UserCreateWithoutRoutesSetInput;
  update: UserUpdateWithoutRoutesSetInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  acceptances?: Maybe<RegistrationListRelationFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  firstName?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  lastName?: Maybe<StringFilter>;
  location?: Maybe<LocationRelationFilter>;
  locationId?: Maybe<IntNullableFilter>;
  password?: Maybe<StringFilter>;
  publicId?: Maybe<StringFilter>;
  registrations?: Maybe<RegistrationListRelationFilter>;
  results?: Maybe<ResultListRelationFilter>;
  role?: Maybe<EnumUserRoleFilter>;
  routesJudged?: Maybe<RouteListRelationFilter>;
  routesSet?: Maybe<RouteListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  publicId?: Maybe<Scalars['String']>;
};
